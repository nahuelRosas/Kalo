import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Stack,
  Flex,
  Icon,
  Box,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { NavItem } from "../../utils/constant";

const SubMenuDirectory: React.FC<NavItem> = ({
  label,
  href,
  subLabel,
}: NavItem) => {
  return (
    <Link href={href ?? "#"}>
      <Stack
        direction={"row"}
        align={"center"}
        justify={"center"}
        cursor={"pointer"}
        _hover={{
          textDecoration: "none",
          color: useColorModeValue("purple.600", "purple.200"),
        }}>
        <Text fontWeight={600}>{label}</Text>
      </Stack>
    </Link>
  );
};

//       >
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}>
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}>
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };
export default SubMenuDirectory;
