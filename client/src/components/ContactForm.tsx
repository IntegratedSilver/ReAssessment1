import { Box, Button, Container, Input, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react"
import Contact from "./Contact"

interface Contact{
    id:number,
    name:string,
    phoneNumber:string
}

const ContactForm = () => {

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const addContact = () =>{
        const newContact: Contact = {
            id: contacts.length +1,
            name: name,
            phoneNumber: phoneNumber
        };

        setContacts([...contacts, newContact])
    }

  return (
    <>
        <Box>
            <Text>Contact Manager</Text>
        <Input value={id}
            onChange={(e) =>
                setId(e.target.value)
            } placeholder='ID' />


        <Input value ={name}
            onChange={(e) =>
                setName(e.target.value)
            } placeholder='Name' />



        <Input value ={phoneNumber}
            onChange={(e) =>
                setPhoneNumber(e.target.value)
            } placeholder='Phone Number' />
        <TableContainer>
  <Table variant='simple'>

    <Thead>
    <Button onClick={addContact} colorScheme="blue">
                Save
              </Button>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th >Phone Number</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td  >1</Td>
        <Td >Tim</Td>
        <Td >55555555</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>Jim </Td>
        <Td >55555555</Td>
      </Tr>

    </Tbody>
    
  </Table>
</TableContainer>

        </Box>
    </>
  )
}

export default ContactForm