pragma solidity ^0.8.4;

import "@openzepplin/contracts/token/ERC721/ERC721.sol";
import "@openzepplin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzepplin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Metaverse Tokens","METT"){
         contractAddress= marketplaceAddress;
    }
    function createToken(string memory tokenURI) public returns(uint){
             _tokenIds.increment();
             uint256  newItemId= _tokenIds.current();
             _mint(msg.sender, newItemId);
             _setTokenURI(newItemId, tokenURI);
             _setApprovalForAll(contractAddress, true);
             return newItemId;
    }
}