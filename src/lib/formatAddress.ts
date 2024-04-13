const formatAddress = (address: string) => {
  // Extract the first 4 and last 6 characters
  const firstPart = address.slice(0, 4);
  const lastPart = address.slice(-6);

  // Return the formatted address
  return `${firstPart}...${lastPart}`;
}

export default formatAddress;