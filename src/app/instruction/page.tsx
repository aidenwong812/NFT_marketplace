"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Instruction() {
  return (
    <div className="w-full h-full relative overflow-auto">
      <div className="w-full flex flex-col px-[50px] bg-[#121212] overflow-auto absolute h-full">
        <div className="w-full flex justify-center">
          <div className="mt-[30px] w-full inline-flex justify-between items-center mb-[30px]">
            <p className="text-[25px]">Wallet / Instruction</p>
          </div>
        </div>
        <div className="w-[70%] pb-[30px] mx-auto overflow-auto h-full">
          <div className="flex">
            <div className="w-full">
              <div className="w-full text-xl text-[#53FAFB] mb-[50px]">
                If you get such a alert message "Please Install Solana Wallet",
                you need to set up your wallet.
              </div>
              <header className="header text-center">
                <h1 className="text-4xl mb-2">
                  How to Set Up Your Phantom Wallet
                </h1>
                <hr className="divider mb-5" />
              </header>

              <div className="flex">
                <div className="grid__item large--four-fifths push--large--one-tenth">
                  <div className="rte rte--nomargin rte--indented-images">
                    <div className="text-center">
                      <p>
                        <b>
                          <i>What is a Phantom Wallet?&nbsp;&nbsp;</i>
                        </b>
                        Phantom wallet helps you manage your crypto wallet and
                        is a crypto wallet for Solana.&nbsp;
                      </p>
                    </div>
                    <div className="text-center mt-[30px]">
                      <strong>
                        Download your{" "}
                        <Link
                          href="https://phantom.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#53FAFB] hover:text-[#53FAFB] hover:underline"
                        >
                          Phantom wallet
                        </Link>{" "}
                        now.
                      </strong>
                    </div>
                    <div className="text-center mt-5">
                      <div>
                        <strong>
                          Here is an easy guide on how to install the Phantom
                          Wallet on Chrome/Firefox
                        </strong>
                      </div>
                      <div></div>
                      <div>
                        <b>
                          <div className="flex justify-center">
                            <iframe
                              width="720"
                              height="450"
                              src="https://youtu.be/BiZJDWgxIvs"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen={false}
                            ></iframe>
                          </div>
                        </b>
                      </div>
                    </div>
                    <div className="text-center my-5">
                      <strong></strong>On your browser (Chrome / Firefox ), go
                      to:
                      <Link
                        href="https://phantom.app/"
                        target="_blank"
                        className="text-[#53FAFB] hover:text-[#53FAFB] hover:underline"
                      >
                        {" "}
                        https://phantom.app
                      </Link>
                      &nbsp;You will be redirected to this page, click on “add
                      to Chrome”
                    </div>
                    <div className="text-center mt-[50px]">
                      <Image
                        src="/instruction/01.jpg"
                        alt=""
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        width={500}
                        height={0}
                      />
                    </div>
                    <div className="text-center my-5">
                      You will then be redirected to the Chrome web store, click
                      on “add to Chrome”&nbsp;
                      <b>
                        <Image
                          src="/instruction/02.jpg"
                          alt=""
                          className="mx-auto"
                          width={500}
                          height={0}
                        />
                      </b>
                    </div>
                    <div className="text-center my-3">
                      On the pop-up, click on “Add extension”
                    </div>
                    <div className="text-center">
                      <Image
                        src="/instruction/03.jpg"
                        alt=""
                        className="mx-auto"
                        width={400}
                        height={0}
                      />
                    </div>
                    <div className="text-center my-3">
                      &nbsp;A new page should open, click on “Create new wallet”
                    </div>
                    <div className="text-center"></div>
                    <div className="text-center">
                      <b>
                        <Image
                          src="/instruction/04.jpg"
                          alt=""
                          width={240}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto my-3"
                        />
                      </b>
                    </div>
                    <div className="text-center mb-5">
                      Save your passphrase - This is very important as your
                      passphrase will be used whenever you install the app on
                      another device or when recovering your account.&nbsp;
                      <br />
                      <span style={{ color: "#ff2a00" }}>
                        Note: never share your passphrase or secret key
                      </span>
                    </div>
                    <div>
                      <b>
                        <span style={{ color: "#ff2a00" }}>
                          <Image
                            src="/instruction/05.jpg"
                            alt=""
                            width={240}
                            height={0}
                            style={{
                              float: "none",
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </span>
                      </b>
                    </div>
                    <div className="text-center my-5">
                      Setup your password and click on "I agree" once done.
                    </div>
                    <div className="text-center mt-5">
                      <b>
                        <Image
                          src="/instruction/06.jpg"
                          alt=""
                          width={240}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto"
                        />
                      </b>
                    </div>
                    <div className="text-center my-5">
                      <b></b>Follow the next screens by clicking on Continue,
                      then Secret Recovery Pharase are shown
                    </div>
                    <div className="text-center mb-5 text-yellow-500">
                      Secret Recovery Phrase - This phrase is the ONLY way to
                      recover your wallet. Do NOT share it with anyone!.
                      <b>&nbsp;</b>
                    </div>
                    <div className="text-center my-5">
                      <b>
                        <Image
                          src="/instruction/07.jpg"
                          alt=""
                          width={240}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto my-5"
                        />
                      </b>
                    </div>
                    <div className="text-center my-5 mt-[40px]">
                      Save it in secure place you could only know and click on
                      "I agree" once done.
                      <b>&nbsp;</b>
                    </div>
                    <div className="text-center my-5">
                      <b>
                        <Image
                          src="/instruction/08.jpg"
                          alt=""
                          width={240}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto my-5"
                        />
                      </b>
                    </div>
                    <div className="text-center my-5">
                      <b></b>Follow the next screens by clicking on Continue
                    </div>
                    <div className="text-center my-5">
                      <b>
                        <Image
                          src="/instruction/09.jpg"
                          alt=""
                          width={240}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto my-5"
                        />
                      </b>
                    </div>
                    <div className="text-center my-5">
                      <b></b>Click Get Started, then Finish
                    </div>
                    <div className="text-center mb-5">
                      Pin to browser - In case you are unable to see the
                      extension on your browser, click on the extensions button
                      and then pin the phantom app.<b>&nbsp;</b>
                    </div>
                    <div className="text-center my-5">
                      <b>
                        <Image
                          src="/instruction/10.jpg"
                          alt=""
                          width={240}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto my-5"
                        />
                      </b>
                    </div>
                    <div className="text-center my-5">
                      Click on the top part your Wallet and this should copy
                      your Wallet ID.
                    </div>
                    <div className="text-center">
                      <b>
                        <Image
                          src="/instruction/11.jpg"
                          alt=""
                          width={240}
                          height={240}
                          style={{ float: "none" }}
                          className="mx-auto"
                        />
                      </b>
                    </div>
                    <div className="text-center my-5 mt-[100px]">
                      Finally we did it - you can now start using Phantom.{" "}
                      <br /> Click the 'Connect Wallet' button below to get
                      started.
                    </div>
                    <div className="text-center my-5">
                      <b>
                        <Image
                          src="/instruction/12.jpg"
                          alt=""
                          width={300}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto"
                        />
                      </b>
                    </div>
                    <div className="text-center my-5 mt-[70px]">
                      Then confirm pane is displayed to connect your wallet.
                      Click on "Connect"
                    </div>
                    <div className="text-center my-5">
                      <b>
                        <Image
                          src="/instruction/13.jpg"
                          alt=""
                          width={300}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto"
                        />
                      </b>
                    </div>
                    <div className="text-center my-5 mt-[70px]">
                      <Link
                        href="/nfts"
                        className="text-[#53FAFB] text-xl mb-5 hover:underline"
                      >
                        Welcome to SOFT COQ NFT MARKETPLACE!
                      </Link>
                      <br />
                      Your Phantom wallet is ready to use. You can get started
                      now in our marketplace.
                    </div>
                    <div className="text-center my-5">
                      <b>
                        <Image
                          src="/instruction/14.jpg"
                          alt=""
                          width={300}
                          height={0}
                          style={{ float: "none" }}
                          className="mx-auto"
                        />
                      </b>
                    </div>
                    <div className="text-center">
                      <p>
                        <strong>
                          If you are having trouble, we can help you in the{" "}
                          <Link
                            href="https://t.me/softcoqinu1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#53FAFB] hover:underline"
                          >
                            telegram channel
                          </Link>
                        </strong>
                        <strong>&nbsp;</strong>
                      </p>
                      <div>
                        <strong>What is telegram?&nbsp;</strong>Telegram is a
                        free voice, video, and text chat app that's used by tens
                        of millions of people ages 13+ to&nbsp;
                        <b>
                          talk and hang out with their communities and friends
                        </b>
                        . People use Telegram daily to talk about many things,
                        ranging from art projects and family trips to homework
                        and mental health support.
                      </div>
                    </div>
                    <div className="text-center">
                      <strong></strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
