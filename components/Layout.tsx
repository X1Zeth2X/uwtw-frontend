import { Box } from '@chakra-ui/react';

/* @TODO
  - Add navigation bar
  - Add footer
*/

const Layout = ({ children }) => (
   <>
    <Box padding="5" backgroundColor="grey">Placeholder Navbar</Box>

    { children }
   </>
)

export default Layout;