import {Box, Heading, VStack} from "@chakra-ui/react"
import BuyerContextSwitch from "components/buyers/BuyerContextSwitch"
import {Breadcrumbs} from "../navigation/Breadcrumbs"

const ContentHeader = (props) => {
  return (
    <VStack w="100%" width="full" marginBottom={3} marginTop={5} pl="GlobalPadding">
      {props?.header?.metas?.hasBreadcrumbs && (
        <Box
          alignItems="center"
          justifyContent="flex-start"
          gap={4}
          w="100%"
          width="full"
          maxW="full"
          display="inline-block"
        >
          <Breadcrumbs />
        </Box>
      )}

      {props?.header?.title && <Heading as="h1">{props?.header?.title}</Heading>}
      {props?.header?.metas?.hasBuyerContextSwitch && (
        <Box
          alignItems="center"
          justifyContent="flex-start"
          gap={4}
          w="100%"
          width="full"
          maxW="full"
          display="inline-block"
          mt="20px"
        >
          <BuyerContextSwitch />
        </Box>
      )}
    </VStack>
  )
}

export default ContentHeader
