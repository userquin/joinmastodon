import { useIntl } from "react-intl"

export const AndroidCategory = () => {
  const intl = useIntl()
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <title>{intl.formatMessage({ id: "browse_apps.android", defaultMessage: "Android" })}</title>
      <path fill="currentColor" d="M1 18q.225-2.675 1.638-4.925Q4.05 10.825 6.4 9.5L4.55 6.3q-.15-.225-.075-.475q.075-.25.325-.375q.2-.125.45-.05t.4.3L7.5 8.9Q9.65 8 12 8t4.5.9l1.85-3.2q.15-.225.4-.3q.25-.075.45.05q.25.125.325.375q.075.25-.075.475L17.6 9.5q2.35 1.325 3.763 3.575Q22.775 15.325 23 18Zm6-2.75q.525 0 .888-.363q.362-.362.362-.887t-.362-.887Q7.525 12.75 7 12.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm10 0q.525 0 .888-.363q.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Z"/>
    </svg>
  )
}
