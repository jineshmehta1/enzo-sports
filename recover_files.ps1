
# Search older sessions for the missing files
param(
    [string]$OutputDir = "C:\Users\jinesh mehta\Downloads\enzo\checkmate\_recovered"
)

# All sessions sorted oldest-to-newest so newer content wins
$sessions = @(
    "0cf97981-cf00-48f7-9f39-a3df1226f548",  # June 16
    "aa324959-9689-4942-a3e1-d9c575f50a6b",  # June 16
    "84cf7921-a9b1-4544-8a14-4bad8b7fc212",  # June 16
    "cf168b85-303e-4f4e-962f-c72d553ef666",  # June 17
    "c07445c3-2113-4fc1-a072-feabcf7519aa",  # June 19
    "2c4708cb-f042-4330-aa0c-b8ec970cf318",  # June 19
    "8e2b61b3-2b62-475e-94ff-7cdf7f7324eb",  # June 25 (no transcript_full)
    "021dd2f6-f2a2-4edc-8d17-8a630c4917fc",  # June 26
    "f6aa4314-5c82-4800-bb9a-6977e2a11c7a",  # June 29 morning
    "24591b12-ecdd-435f-b304-f984a6625874"   # June 29 (session with git restore)
)
$brainDir = "C:\Users\jinesh mehta\.gemini\antigravity-ide\brain"

# Only look for files not yet recovered
$missingFiles = @(
    "app/achievements/page.tsx",
    "app/blogs/page.tsx",
    "app/coaches/page.tsx",
    "app/events/page.tsx",
    "app/gallery/page.tsx",
    "app/layout.tsx",
    "app/online-coaching/page.tsx",
    "app/quick-pay/page.tsx",
    "app/terms/page.tsx",
    "components/BookDemoModal.tsx",
    "components/courses-section.tsx",
    "components/demo-booking-cta.tsx",
    "components/team-section.tsx",
    "components/ui/AchievementsBanner.tsx",
    "components/ui/AchievementsSection.tsx",
    "components/ui/ContactBanner.tsx",
    "components/ui/ContactSection.tsx",
    "components/ui/GalleryBanner.tsx",
    "components/ui/GallerySection.tsx",
    "components/ui/PricingSection.tsx",
    "components/ui/final-cta-section.tsx",
    "components/ui/premiunstats.tsx",
    "components/ui/teaching.tsx",
    "components/ui/team-section.tsx",
    "components/why-choose.tsx"
)

Write-Host "=== SEARCHING OLDER SESSIONS FOR MISSING FILES ===" -ForegroundColor Cyan

$recoveredFiles = @{}

foreach ($session in $sessions) {
    # Try both transcript files
    $transcriptPaths = @(
        "$brainDir\$session\.system_generated\logs\transcript_full.jsonl",
        "$brainDir\$session\.system_generated\logs\transcript.jsonl"
    )
    
    $transcriptPath = $null
    foreach ($p in $transcriptPaths) {
        if (Test-Path $p) { $transcriptPath = $p; break }
    }
    
    if (-not $transcriptPath) { 
        Write-Host "No transcript: $session" -ForegroundColor Gray
        continue
    }
    
    $fileSize = (Get-Item $transcriptPath).Length
    Write-Host "`nSearching: $session ($fileSize bytes)" -ForegroundColor Green
    
    $lines = Get-Content $transcriptPath -Encoding UTF8
    
    foreach ($line in $lines) {
        try {
            $step = $line | ConvertFrom-Json -ErrorAction SilentlyContinue
            if (-not $step) { continue }
            
            $content = $step.content
            if (-not $content) { continue }
            
            # Match file path
            if ($content -match "File Path: ``file:///c:/Users/jinesh%20mehta/Downloads/enzo/checkmate/([^``\r\n]+)``") {
                $rawPath = $matches[1].Trim()
                $filePath = [System.Uri]::UnescapeDataString($rawPath)
                
                # Check if this is one of our missing files
                $isWanted = $false
                foreach ($mf in $missingFiles) {
                    if ($filePath -eq $mf -or $filePath.Replace("\","/") -eq $mf) {
                        $isWanted = $true; break
                    }
                }
                if (-not $isWanted) { continue }
                
                # Extract content
                if ($content -match "(?s)Showing lines \d+ to \d+\r?\n(The following code[\s\S]+)") {
                    $rawContent = $matches[1]
                    $fileLines = $rawContent -split "`r?`n"
                    $cleanLines = @()
                    $inContent = $false
                    foreach ($fl in $fileLines) {
                        if ($fl -match "^The following code") { $inContent = $true; continue }
                        if ($fl -match "^The above content") { break }
                        if ($inContent) {
                            if ($fl -match "^\d+: (.*)$") {
                                $cleanLines += $matches[1]
                            } elseif ($fl -match "^\d+:$") {
                                $cleanLines += ""
                            } else {
                                $cleanLines += $fl
                            }
                        }
                    }
                    $fileContent = $cleanLines -join "`n"
                    
                    if ($fileContent.Length -gt 50) {
                        if (-not $recoveredFiles.ContainsKey($filePath) -or $recoveredFiles[$filePath].Length -lt $fileContent.Length) {
                            $recoveredFiles[$filePath] = $fileContent
                            Write-Host "  FOUND: $filePath ($($fileContent.Length) chars)" -ForegroundColor Yellow
                        }
                    }
                }
            }
        } catch {}
    }
}

Write-Host "`n=== RECOVERED FROM OLDER SESSIONS: $($recoveredFiles.Count) ===" -ForegroundColor Cyan

# Write recovered files
foreach ($filePath in $recoveredFiles.Keys) {
    $content = $recoveredFiles[$filePath]
    $outPath = Join-Path $OutputDir $filePath
    $outDir = [System.IO.Path]::GetDirectoryName($outPath)
    
    if (-not (Test-Path $outDir)) {
        New-Item -ItemType Directory -Path $outDir -Force | Out-Null
    }
    
    [System.IO.File]::WriteAllText($outPath, $content, [System.Text.Encoding]::UTF8)
    
    # Also copy directly to project
    $projPath = Join-Path "C:\Users\jinesh mehta\Downloads\enzo\checkmate" $filePath
    $projDir = [System.IO.Path]::GetDirectoryName($projPath)
    if (-not (Test-Path $projDir)) { New-Item -ItemType Directory -Path $projDir -Force | Out-Null }
    [System.IO.File]::WriteAllText($projPath, $content, [System.Text.Encoding]::UTF8)
    
    Write-Host "  Restored: $filePath" -ForegroundColor Green
}

# Report what's still missing
Write-Host "`n=== STILL MISSING (not found in any session) ===" -ForegroundColor Red
foreach ($mf in $missingFiles) {
    if (-not $recoveredFiles.ContainsKey($mf)) {
        Write-Host "  $mf" -ForegroundColor Red
    }
}
