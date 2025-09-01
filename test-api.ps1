Write-Host "Testing GET /products endpoint..."
$products = Invoke-RestMethod -Uri "http://localhost:3000/products" -Method GET
$products | ConvertTo-Json

Write-Host "`nTesting POST /cart endpoint..."
$body = @{
    productId = 1
    quantity = 2
} | ConvertTo-Json

$cart = Invoke-RestMethod -Uri "http://localhost:3000/cart" -Method POST -Body $body -ContentType "application/json"
$cart | ConvertTo-Json
