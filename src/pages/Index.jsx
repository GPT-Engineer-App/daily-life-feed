// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, VStack, HStack, Text, Image, IconButton, Divider } from "@chakra-ui/react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const Index = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      author: "Alice",
      time: "1 hour ago",
      content: "Had a great time hiking today!",
      imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWtpbmd8ZW58MHx8fHwxNzEzNjYyOTk4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 12,
      comments: 3,
      shares: 2,
    },
    {
      id: 2,
      author: "Bob",
      time: "2 days ago",
      content: "Here's my latest painting. Let me know what you think!",
      imageUrl: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYWludGluZ3xlbnwwfHx8fDE3MTM2NjI5OTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 45,
      comments: 8,
      shares: 5,
    },
    {
      id: 3,
      author: "Carol",
      time: "1 week ago",
      content: "Nothing beats a good book and coffee.",
      imageUrl: "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwYW5kJTIwY29mZmVlfGVufDB8fHx8MTcxMzY2Mjk5OXww&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 90,
      comments: 12,
      shares: 10,
    },
  ];

  return (
    <VStack spacing={4} align="stretch">
      {posts.map((post) => (
        <Box key={post.id} p={5} shadow="md" borderWidth="1px">
          <HStack spacing={4}>
            <Image borderRadius="full" boxSize="50px" src={post.imageUrl} alt={`Post by ${post.author}`} />
            <VStack align="start">
              <Text fontWeight="bold">{post.author}</Text>
              <Text fontSize="sm">{post.time}</Text>
            </VStack>
          </HStack>
          <Text mt={4}>{post.content}</Text>
          <Image borderRadius="md" mt={4} src={post.imageUrl} alt="Post image" />
          <HStack spacing={4} mt={4}>
            <IconButton aria-label="Like post" icon={<FaHeart />} size="sm" variant="ghost" />
            <Text>{post.likes}</Text>
            <IconButton aria-label="Comment on post" icon={<FaComment />} size="sm" variant="ghost" />
            <Text>{post.comments}</Text>
            <IconButton aria-label="Share post" icon={<FaShare />} size="sm" variant="ghost" />
            <Text>{post.shares}</Text>
          </HStack>
        </Box>
      ))}
      <Divider />
    </VStack>
  );
};

export default Index;
