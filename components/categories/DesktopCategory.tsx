import { useIntl } from "react-intl"

export const DesktopCategory = () => {
  const intl = useIntl()
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <title>{intl.formatMessage({ id: "browse_apps.desktop", defaultMessage: "Desktop" })}</title>
      <path fill="currentColor" d="M8 21v-2h2v-2H4q-.825 0-1.412-.587Q2 15.825 2 15V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v10q0 .825-.587 1.413Q20.825 17 20 17h-6v2h2v2Zm-4-6h16V5H4v10Zm0 0V5v10Z"/>
    </svg>
  )
}
