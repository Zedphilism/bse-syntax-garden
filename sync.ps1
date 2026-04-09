# BSE Syntax Garden — Daily Auto Sync
# Commits and pushes any new/changed notes to GitHub
# Scheduled via Windows Task Scheduler (once daily)

$repoPath = "C:\Users\user\Desktop\bse-syntax-garden"
$logFile  = "$repoPath\sync.log"

Set-Location $repoPath

git add -A

$changes = git status --porcelain
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

if ($changes) {
    git commit -m "sync: daily push $timestamp"
    git push origin main
    Add-Content $logFile "[$timestamp] PUSHED — changes synced"
} else {
    Add-Content $logFile "[$timestamp] OK — nothing to push"
}
