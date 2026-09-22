class PricingService:
    @staticmethod
    def calculate_total(base_price: float, days: int, tax_rate: float = 0.12) -> float:
        subtotal = base_price * days
        return round(subtotal + (subtotal * tax_rate), 2)
