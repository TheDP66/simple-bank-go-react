package util

// Constants for all supported currencies
const (
	USD = "USD"
	IDR = "IDR"
	EUR = "EUR"
)

// IsSupportedCurrency returns true if the currency is supported
func IsSupportedCurrency(currency string) bool {
	switch currency {
	case USD, IDR, EUR:
		return true
	}

	return false
}
