# Test ALL favicon files with v=2 parameter
$domain = "globalgurullc.com"
$files = @(
    "favicon.ico?v=2",
    "favicon-32.png?v=2", 
    "favicon-96.png?v=2",
    "favicon-192.png?v=2",
    "favicon-512.png?v=2",
    "apple-touch-icon.png?v=2",
    "site.webmanifest?v=2"
)

Write-Host "Testing Your Fixed Favicon Setup" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

foreach ($file in $files) {
    $url = "https://$domain/$file"
    Write-Host "`nTesting: $file" -ForegroundColor Yellow
    
    try {
        $req = [System.Net.WebRequest]::Create($url)
        $req.Method = "HEAD"
        $req.Timeout = 10000
        $resp = $req.GetResponse()
        
        $status = $resp.StatusCode
        Write-Host "   Status: $status" -ForegroundColor Green
        Write-Host "   ACCESSIBLE" -ForegroundColor Green
        
        $resp.Close()
    }
    catch {
        Write-Host "   ERROR: Not found" -ForegroundColor Red
    }
}

# Check Google's current view
Write-Host "`nGoogle's Current View:" -ForegroundColor Cyan
$googleUrl = "https://www.google.com/s2/favicons?domain=$domain"
Write-Host "   $googleUrl" -ForegroundColor Yellow
Start-Process $googleUrl