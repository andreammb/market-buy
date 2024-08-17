import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Ingresa a tu cuenta MarketBuy.",
}

export default function Login() {
  return <LoginTemplate />
}
