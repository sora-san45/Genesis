import { Flex, Box, Image, Divider, AbsoluteCenter, Text, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, Icon, HStack, useDisclosure, Button, Input } from "@chakra-ui/react";
import woman from '../../src/assets/woman1.avif'
import Modal1 from '../../src/components/Modal1'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
const AdopterProf = () => {
    const basicInfoList = [{ title1: "Address" }, { title2: "City" }, { title3: "Country" }, { title4: "Pincode" }]
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <Flex w={'100vw'} direction={'column'} h={'100vh'}>
            <Flex h={110} w={'100vw'} bgColor={'blue.100'}></Flex>
            <Box width={200} height={200} borderRadius='120' borderColor={'blue.100'} overflow='hidden' ml={"10%"} mt={-85} borderWidth={'10px'}>
                <Image src={woman} />
            </Box>
            <Flex gap={180} w={'85vw'}>

                <Flex direction={'column'} w={'42%'} mt={4} >
                    <Flex gap={20}>
                        <Heading ml={130} fontSize={25} mb={5}>Adopter Id : 1234   </Heading>
                    </Flex>
                    <Box position='relative' padding='5'>
                        <Divider borderWidth={1.5} borderColor={'blue.200'} />
                        <AbsoluteCenter px='4' color={'blue.800'} bg='white' fontWeight={'semibold'} >
                            Basic Information
                        </AbsoluteCenter>
                    </Box>
                    <Flex direction={'column'} ml={10}>
                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Address : </span>Grace Villa, Kakkanad, Kochi</Text>
                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>City : </span>Kochi</Text>
                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Country : </span>India</Text>
                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Pincode : </span>682021</Text>
                    </Flex>

                </Flex>
                <Flex direction={'column'} mt={-20} w={470}>
                    <Tabs variant={'soft-rounded'} >
                        <TabList>
                            <Tab w={135} >Parent 1</Tab>
                            <Tab w={135}>Parent 2</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel p={4}>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Name : </span>John Doe</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Phone : </span>Kochi</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Email : </span>India</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Gender : </span>682021</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Age : </span>682021</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>DOB : </span>682021</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Occupation : </span>682021</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Blood Group : </span>682021</Text>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Flex>
         
        </Flex>


    );
}

export default AdopterProf;