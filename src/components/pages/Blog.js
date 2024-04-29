import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const BlogCard = ({ title, author, date, image, excerpt, externalUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-40 object-cover object-center"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">
          By {author} | {date}
        </p>
        <p className="mt-2 text-gray-700">{excerpt}</p>
      </div>
    </div>
  );
};

const BlogPage1 = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
    // Clear email input field
    e.target.elements.email.value = "";
  };

  // Sample blog post data
  const blogPosts = [
    {
      title: "Introduction to Blockchain Technology",
      author: "John Doe",
      date: "March 15, 2023",
      image:
        "https://images.spiceworks.com/wp-content/uploads/2022/10/04121130/Concept-depicting-block-validation-in-the-blockchain-and-digital-ledger.jpg",
      excerpt:
        "Consensus ensures that the shared ledgers are identical, lowering the risk of fraudulent transactions, because tampering would have to occur across many places at exactly the same time. ",
      externalUrl:
        "https://www.corcentric.com/blog/introduction-to-blockchain-technology/",
    },
    {
      title: "What is Cryptocurrency and How does it work?",
      author: "John Doe",
      date: "Feb 05, 2024",
      image:
        "https://www.kaspersky.com/content/en-global/images/repository/isc/2021/cryptocurrency_image1_1130490519_670x377px_300dpi.jpg",
      excerpt:
        "Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. ",
      externalUrl:
        "https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency",
    },
    // Additional blog posts
    {
      title: "The Future of Decentralized Finance (DeFi)",
      author: "Jane Smith",
      date: "May 20, 2024",
      image:
        "https://dsb.edu.in/wp-content/uploads/2023/08/Understanding-DeFi-The-New-Way-of-Finance.jpg",
      excerpt:
        "the future of decentralized finance holds immense potential to democratize access to financial services, promote financial inclusion, and reshape traditional finance paradigms by leveraging blockchain technology and decentralized principles.",
      externalUrl:
        "https://www.nasdaq.com/articles/decentralized-finance-defi-is-the-future",
    },
    {
      title: "Understanding Smart Contracts",
      author: "Jane Smith",
      date: "June 10, 2024",
      image:
        "https://pirimidtech.com/wp-content/uploads/2022/02/smart-contract-1.png",
      excerpt:
        "Smart contracts are typically used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss. They can also automate a workflow, triggering the next action when predetermined conditions are met.",
      externalUrl: "https://www.ibm.com/topics/smart-contracts",
    },
    {
      title: "The Rise of NFTs (Non-Fungible Tokens)",
      author: "John Doe",
      date: "July 5, 2024",
      image:
        "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/opinion/2022/01/31/shutterstock_1941406885.jpg?itok=OU331cnN",
      excerpt:
        "Today, many people continue to debate the actual value of non-fungible tokens (NFTs). There also a lot of debate about whether they are here to stay or just a passing fad.",
      externalUrl: "https://www.threekit.com/the-rise-and-rise-of-nfts",
    },
    {
      title: "Decentralized Governance: A New Paradigm",
      author: "John Doe",
      date: "August 15, 2024",
      image:
        "https://media.licdn.com/dms/image/D5612AQFI4Dka2gxJZg/article-cover_image-shrink_720_1280/0/1703818529550?e=1715817600&v=beta&t=40umBGhEdvoI-7DM2IJKn7OCZvVaz5zPqnljWbzkYNM",
      excerpt:
        "Few issues have created as much controversy over the past half century as how governments and political systems should be structured and how public policies should be made and implemented. ",
      externalUrl: "https://www.jstor.org/stable/10.7864/j.ctt1261v1",
    },
  ];

  return (
    <>
      <Navbar/>
      <nav>{/* Navigation content */}</nav>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              image={post.image}
              excerpt={post.excerpt}
              externalUrl={post.externalUrl}
            />
          ))}
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default BlogPage1;
