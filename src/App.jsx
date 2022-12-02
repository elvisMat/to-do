import { useState } from 'react'
import { Container, Text, Box, Input, Flex, Stack, Button } from '@chakra-ui/react'
import Item from './components/Item'
import { useToast } from '@chakra-ui/react'
function App() {
  const [items, setItems] = useState([
    {
      title: 'Wash dishes'
    },
    {
      title: "Clean yard"
    }
  ]
  )
  const [text, setText] = useState('')
  // console.log(items.filter((el)=>el.title!='Clean yard'))
    const toast = useToast();

  return (
    <Box bg='white'>
      <Box px={2} bg='white' height={'64px'} boxShadow='md'>
        <Flex height={'100%'} alignItems={'center'} justifyContent={"space-between"}>
          <p><strong>To do </strong></p>
          <Box>
            <Stack direction={'row'} alignItems={'center'} justifyContent={"space-between"}>
              <Input placeholder='Type something' value={text} onChange={(e) => setText(e.target.value)} />
              <Button onClick={() =>{
                 toast({
                  title: `'${text}' added`,
                  // description: "We've created your account for you.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
              });
                setItems([...items, { title: text }]); setText('')
                }} disabled={text.length <= 3}>Add</Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
      <Container mt={'100px'}>
        {items.length==0? <p>No items</p>:
        
          items.map((el) => {
            return <Item  onClick={()=>{
              toast({
                title: `'${el.title}' deleted`,
                // description: "We've created your account for you.",
                status: 'info',
                duration: 9000,
                isClosable: true,
            });
              setItems(items.filter((item)=>item.title!=el.title))
            }
            } title={el.title} key={el.title} />
          })
        
        }
      </Container>

    </Box >
  )
}

export default App
