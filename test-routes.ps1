$routes = @(
  'http://localhost:3000',
  'http://localhost:3000/dashboard',
  'http://localhost:3000/dashboard/analytics',
  'http://localhost:3000/dashboard/users',
  'http://localhost:3000/dashboard/settings'
)

foreach ($route in $routes) {
  try {
    $response = Invoke-WebRequest -Uri $route -Method Head -UseBasicParsing
    Write-Host "$route - $($response.StatusCode)" -ForegroundColor Green
  } catch {
    Write-Host "$route - ERROR" -ForegroundColor Red
  }
}
