import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Atencion:</span> Solo con fines de prueba
    </Badge>
  )
}

export default PaymentTest
