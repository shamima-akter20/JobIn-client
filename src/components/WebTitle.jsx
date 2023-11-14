
import { Helmet } from 'react-helmet-async'

export default function WebTitle({children}) {
  return (
    <Helmet>
        <title>{children} | JobIN</title>
    </Helmet>
  )
}
