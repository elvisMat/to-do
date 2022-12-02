import React from 'react'
import { Box, Text } from '@chakra-ui/react'
function Item({ title, onClick }) {

    const [isDone, setIsDone] = React.useState(false)
    return (
        <Box onClick={() => {

            isDone ?
                onClick()

                : setIsDone(!isDone);
        }
        }
            _hover={{ cursor: 'pointer' }} p={'15px 10px'} mt={'10px'} bg={isDone ? "red.100" : 'green.100'}>
            <Text>
                {isDone ?
                    <strike>{title}</strike> :
                    title
                }
            </Text>
        </Box>
    )
}
export default Item