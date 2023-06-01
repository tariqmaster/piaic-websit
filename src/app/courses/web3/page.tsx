import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Footer from "@/app/footer";
import Navbar from "@/app/navbar";

export default function Web3() {
  return (
    <div>
      <Navbar />
      <div className="p-10 w-full course-outline ">
        <div className="bg-blue-300 sm:col-start-1 text-center text-lg font-bold px-10 py-5 rounded-lg">
          <h2>Web 3 and Metaverse Specialization</h2>
        </div>
        <div className="py-3 sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
          <a href="/courses/web3#q4"><h3>Quarter IV</h3></a>
          <h1>
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className=" sm:col-start-1 rounded-lg  text-justify p-5">
          <h3> Course Description:</h3>
          <p className="text-base">
            In this course you will learn how to develop Web 3.0 DApps, create a
            project, deploy it in production, write smart contracts, unit test
            them, and create user interfaces for them. We will also learn to
            develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that
            in order to develop Web 3 applications you also need to build on top
            of Web 2.0 technologies which we have already covered in the
            previous quarters.
            <br />
            <a href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db">
              https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db
            </a>
          </p>
          <br />
          <h2>Course Outline:</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
            <div className="sm:col-start-1">
              <h3>1. Blockchain and Metaverse Theory</h3>
              <p className="text-base">
                The Metaverse: And How It Will Revolutionize Everything by
                Matthew Ball
                <br />
                <a href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0">
                  https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0
                </a>
                <br />
                <br />
                Mastering Blockchain - Fourth Edition by Imran Bashir
                <br />
                <a href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067">
                  https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067
                </a>
                <br />
              </p>
              <br />
              <h3>2. Smart Contract Development in Solidity </h3>
              <p className="text-base">
                Solidity Programming Essentials - Second Edition By Ritesh Modi
                <br />
                <a href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181">
                  https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181
                </a>
                <br />
                <br />
                Solidity Learning Repo
                <br />
                <a href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts">
                  https://github.com/panaverse/defi-dapps-solidity-smart-contracts
                </a>
              </p>
              <br />

              <h3>3. Dapp Development using Ethers.js and Next.js 13</h3>
              <p className="text-base">
                Dapp Learning Repo
                <br />
                <a href="https://github.com/panaverse/dapps-nextjs">
                  https://github.com/panaverse/dapps-nextjs
                </a>
              </p>
              <br />
            </div>
            <div className="">
              <figure>
                <img
                  src="https://media.istockphoto.com/id/1321058094/photo/3d-rendering-of-blockchain-on-technology-background.jpg?s=612x612&w=0&k=20&c=ibeGM68lyElESfXAEmsgYdVSPYhd94sbXSJIy31fboU="
                  alt="pic loading"
                  
                />
              </figure>
            </div>
          </div>
          <div className=" sm:col-start-1">
            <h3>4. Tokennomics</h3>
            <br />
            <h3>
              5. Blockchain Project: Create a Token and Launch ICO/IEO/IDO
            </h3>
            <p className="text-base">
              As you probably know, the ICO ("Initial Coin Offering") industry
              has been booming, and it's completely reinventing the way new
              startups kickstart themselves. In fact, have a look at Wikipedia's
              list of highest crowdfunding projects{" "}
              <a href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects">
                https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects
              </a>
              , and you'll notice that blockchain projects absolutely dominate
              the list.
              <br />
              <br />
              Understand the difference between IDO vs. IEO vs. ICO
              <br />
              <a href="https://phemex.com/blogs/what-is-a-dex-ido">
                https://phemex.com/blogs/what-is-a-dex-ido
              </a>
              <br />
              <br />
              Also check these links for latest listings:
              <br />
              ICO list at ICO Drops
              <br />
              <a href="https://icodrops.com">https://icodrops.com</a>
              <br />
              <br />
              ICO List of Best New Initial Coin Offerings
              <br />
              <a href="https://topicolist.com/">https://topicolist.com/</a>
              <br />
              <br />
              Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOs
              <br />
              <a href="https://cryptototem.com/ico-list/">
                https://cryptototem.com/ico-list/
              </a>
              <br />
              <br />
              ICO List Online
              <br />
              <a href="https://www.icolistingonline.com">
                https://www.icolistingonline.com
              </a>
              <br />
              <br />
              Binance IEO List
              <br />
              <a href="https://coincodex.com/ieo-list/binance/">
                https://coincodex.com/ieo-list/binance/
              </a>
              <br />
              <br />
              Binance Launchpad
              <br />
              <a href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/">
                https://www.coinspeaker.com/ieo/platform/binance-launchpad/
              </a>
              <br />
              <br />
              IEO List <br />
              <a href="https://icomarks.com/ieo">https://icomarks.com/ieo</a>
              <br />
              <br />
              Polkastarter
              <br />
              <a href="https://polkastarter.com">https://polkastarter.com</a>
            </p>
            <br />
            <h4 className="font-bold">
              Project Part 1: How to Launch a IEO on Binance Launchpad
            </h4>
            <p className="text-base">
              Read How to Launch an IEO
              <br />
              <a href="https://appinventiv.com/blog/how-to-launch-an-ieo/">
                https://appinventiv.com/blog/how-to-launch-an-ieo/
              </a>
              .
              <br />
              Your first task of the project is to make a google slides
              presentation on how to start a IEO on the Binance Launch Pad
              <br />{" "}
              <a href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04">
                https://www.binance.com/en/support/faq/94
                <br />
                ed108ce89d44ab8602aa3c476dfb04
              </a>
              <br />
              <br />
              Note: Also document the alternatives to Binance Launchpad.
              <br />
              <br />
            </p>
            <h4 className="font-bold">
              Project Part 2: How to Launch a IDO on Polkastarter
            </h4>
            <p className="text-base">
              Review the [list of top fundraising platforms
              <br />
              <a href="https://cryptorank.io/fundraising-platforms ">
                https://cryptorank.io/fundraising-platforms{" "}
              </a>
              <br />
              <br />
              Your second task of the project is to make a google slides
              presentation on how to start a IDO on the Polkastarter
              <br />
              <a href="https://polkastarter.com/">https://polkastarter.com/</a>
              <br />
              <br />
            </p>
            <h4 className="font-bold">Project Part 3: Create a Pako Token</h4>
            <p className="text-base">
              By creating a token and related contracts, you'll also learn how
              to handle money sent to your contracts, which should come in handy
              if you want to create some kind of paid decentralized service in
              the future.
              <br />
              Therefore, for the sake of this chapter, let's imagine that our
              Pako DApp uses its own coin – the Pako Token. We will create two
              contracts – one for the token itself and one for the token crowd
              sale (the ICO).
              <br />
              Now Create your own Pako ERC20 Token and deploy it on a testnet.
              The Token should be to use OpenZeppelin contracts. You will use
              the Hardhat development environment. Also, write at least twenty
              automated tests. We will be using Solidity and Typescript for
              development.
              <br />
            </p>
            <br />
            <h4 className="font-bold">
              Project Part 4: Develop Crowd Sale Contract
            </h4>
            <p className="text-base">
              This contract will be responsible for allowing users to exchange
              ETH for our Pako Token. In order to do that we need to set a price
              for our token (1 ETH = 100 Pako Token) . Implement a payable
              buyToken() function.
              <br />
              Emit a BuyTokens event that will log who’s the buyer, the amount
              of ETH sent and the amount of Token bought.
              <br />
              Transfer 75% of the Tokens to the Crowd Sale contract at
              deployment time. i.e. Right after the contract is deployed, we
              want the token contract to send 75% of our token supply to it.
              While 25% remain in our personal "owner" account.
              <br />
              Transfer the ownership of the Crowd Sale contract (at deploy time)
              to our frontend address so that we are able to withdraw the ETH.
              <br />
              You can use the openzeppelin crowd sale contracts <br />
              <a href="https://docs.openzeppelin.com/contracts/4.x/crowdsales">
                https://docs.openzeppelin.com/contracts/4.x/crowdsales
              </a>
              <br /> however you will have to update the code to the latest
              solidity version.
              <br />
              Also write extensive tests, for example we will simply send a
              transaction of 1 ETH from a random account to the contract. After
              the transaction, we should expect the account to have received
              Pako, while the contract's balance should have been reduced.
              <br />
              Note: Before you get started writing the token contract we suggest
              you review the access control
              <br />
              <a href="https://docs.openzeppelin.com/contracts/4.x/access-control">
                https://docs.openzeppelin.com/contracts/4.x/access-control
              </a>
              <br />
              <br />
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
            <div className="sm:col-start-1 py-5 gap-5 -px-5">
              <h4 className="font-bold">
                Project Part 5: Trying it with MetaMask
              </h4>
              <p className="text-base">
                While it's always good to test your code, it's often more
                satisfying to see the results of your work wrapped in a nice UI.
                Let's see how we can deploy our contracts and get some Pako
                tokens into our MetaMask wallet! We start by running our
                deployment scripts for the test network so that the new token
                contracts are uploaded and deployed. When it's done, take note
                of what addresses the contracts were uploaded to and copy it!
                Now head to MetaMask, and send a transaction of 1 ETH to the
                crowd sale contract address. If your MetaMask wallet doesn't
                have any ethers, remember that you can use any faucet. After the
                transaction has been confirmed, you might be confused about why
                you can't see any tokens in your wallet. It turns out that you
                need to manually add the token address in MetaMask in order to
                "register" it – after all, there are so many tokens out there,
                there's no way MetaMask could list them all by default! To do
                this, open the side menu and click on the "Add token" button to
                get started:
                <br />
                <br />
                Once you're on the token page, click on "Add custom token" and
                paste in the token contract's address in the address field.
                After confirming that you want to add the token, you should be
                able to see your Pako balance right next to your ETH balance in
                the wallet. How cool!
                <br />
              </p>
              <br />
              <h4 className="font-bold">
                Project Part 6: Trying it with Multisignature Wallets
              </h4>
              <p className="text-base">
                Read{" "}
                <a href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/">
                  https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
                </a>
                .
                <br />
                Now use Gnosis Safe
                <a href="https://gnosis-safe.io/">
                  {" "}
                  https://gnosis-safe.io/
                </a>{" "}
                with multi-sigs to do what you did in the last part.
              </p>
            </div>
            <div className="px-5 py-5">
              <figure>
                <img
                  src="https://media.istockphoto.com/id/1397376354/vector/cryptocurrency-wallet-with-bitcoin-coins-which-fly-to-isometric-cellphone-with-metamask-logo.jpg?s=612x612&w=0&k=20&c=WFkhsmQa6OZvss5EmkjHrEGWEMMC54jyyAx53zV2cfI="
                  alt="pic loading"
                />
              </figure>
            </div>
          </div>
          <div className="sm:col-start-1">
            <h4 className="font-bold">
              Project Part 7: Sending Tokens using Ethers.js{" "}
            </h4>
            <p className="text-base">
              Write a Typescript program to send Pako Token to some friend's
              address using Ethers.js.
              <br />
              You may follow this tutorial{" "}
              <a href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/h4">
                https://ethereum.org/en/developers/tutorials/send-token-etherjs/h4
              </a>
            </p>
            <br />
            <br />
            <h4 className="font-bold">
              Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
            </h4>
            <p className="text-base">
              <br />
              Read this NFT tutorial series
              <br />
              <a href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/">
                https://ethereum.org/en/developers/tutorials/
                <br />
                how-to-write-and-deploy-an-nft/
              </a>
              <br />
              <br />
              Create a NFT contract using the [OpenZepplen ERC721 NFT Standard{" "}
              <br />
              <a href="https://docs.openzeppelin.com/contracts/4.x/erc721">
                https://docs.openzeppelin.com/contracts/4.x/erc721
              </a>
              <br />
              <br />
              You may use the Preset ERC721 contract
              <br />
              <br />
              <a href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets">
                https://docs.openzeppelin.com/
                <br />
                contracts/4.x/erc721#Presets
              </a>
              <br />
              <br />
              Deploy your NFT contract on a testnet, mint it, and view it on the
              MetaMask wallet and list it on OpenSea Marketplace
              <br />
              <a href="https://opensea.io/">https://opensea.io/</a> for sale.
              <br />
              <br />
              Implement a ERC721 Market <br />
              <a href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/">
                https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/
              </a>
              <br />
            </p>
          </div>
        </div>
      
        

        
        {/* Quarter five */}

        <div className=" w-full course-outline ">
          <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
            <h3 id="q5">Quarter V</h3>
            <h1>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</h1>
            <h3>Duration: 13 Weeks</h3>
          </div>

          {/* 1st component: */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] ">
            <div className="py-5 sm:col-start-1 rounded-lg  text-justify">
              <h3> Course Description:</h3>
              <p className="text-base">
              The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.

              </p>
            </div>
            <div className="px-5 py-5">
              <figure>
                <img
                  className=""
                  src="https://media.istockphoto.com/id/1029186020/photo/smart-city-and-telecommunication-concept.jpg?s=612x612&w=0&k=20&c=UZGfRyXcCCTMRWNB8D2NvpCs_vguAe_Uo5eIoKYnfUY="
                  alt="pic loading"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="">
               
          <h4 className="font-bold">1. Open Metaverse Web Development</h4> 
          <p className="text-base">
Open Metaverse Learning Repo 
<br/><a href="https://github.com/panaverse/metaverse-web">https://github.com/panaverse/metaverse-web</a> 
</p><br/>
<h4 className="font-bold">2. Blender 3D asset Creation for the Metaverse (Remote Zoom Class)</h4>
<p className="text-base">
Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse. 
<br/><br/>
Blender 3.3+ Download <br/><a href="https://www.blender.org/download/">https://www.blender.org/download/</a> 
<br/><br/>
Blender 3.0 Beginner Tutorial <br/><a href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD</a> 
<br/><br/>
Blender 3.0 Hotkey <br/><a href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit">https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit</a> 
<br/><br/>
Blender Projects Textbook: Blender by Example 2nd Edition <br/><a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561</a> 
<br/><br/>
Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain <br/><a href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5">https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5</a> 
<br/><br/>
Best Hardware Performance for Blender Rendering <br/><a href="https://www.youtube.com/watch?v=H7T0SzdFHwg">https://www.youtube.com/watch?v=H7T0SzdFHwg</a>  
</p><br/>
<h4 className="font-bold">Assignment 1:</h4>
<p className="text-base">
Build a 3D Donut using Blender 3 as shown in these video tutorials <br/><a href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD</a> 
</p><br/>
<h4 className="font-bold">Assignment 2:</h4>
<p className="text-base">
Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by Example 2nd Edition <a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561</a> 
</p><br/>
<h4 className="font-bold">Assignment 3:</h4>
<p className="text-base">
Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition <br/><a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561</a> 
</p><br/>
<h4 className="font-bold">Assignment 4:</h4>
<p className="text-base">
Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition <br/><a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561</a> 
</p><br/>
<h4 className="font-bold">Assignment 5:</h4>
<p className="text-base">
Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition <br/><a href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561</a> 
</p><br/>
<h4 className="font-bold">Assignment 6:</h4>
<p className="text-base">
Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials <br/><a href="https://www.youtube.com/watch?v=bpvh-9H8S1g">https://www.youtube.com/watch?v=bpvh-9H8S1g</a> 
    </p>
        </div>
      </div>   

      <Footer />
    </div>
  );
}
