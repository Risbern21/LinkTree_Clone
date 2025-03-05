"use client";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

const Generate = () => {
  const searchparams = useSearchParams();

  const [LinkAndText, setLinkAndText] = useState([{ Link: "", LinkText: "" }]);
  const [Handle, setHandle] = useState(searchparams.get("Handle") || "");
  const [description, setdescription] = useState("");
  const [profilepic, setprofilepic] = useState("");
  const [bgcolor, setbgcolor] = useState("");
  const [generated, setgenerated] = useState("");

  const handleClick = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      Handle: Handle,
      LinkAndText: LinkAndText,
      profilepic: profilepic,
      bgcolor: bgcolor,
      description: description,
    });

    setgenerated(Handle);
    setLinkAndText([{ Link: "", LinkText: "" }]);
    setHandle("");
    setprofilepic("");
    setbgcolor("");
    setdescription("");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result.error) {
          toast.success(result.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(result.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {});
      setTimeout(() => {
        redirect(`/${Handle}`)
      }, 1000);
  };

  const handleAddLink = () => {
    setLinkAndText(LinkAndText.concat([{ Link: "", LinkText: "" }]));
  };

  const handlechange = (index, Link, LinkText) => {
    setLinkAndText((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return {
            Link,
            LinkText,
          };
        } else return item;
      });
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="text-[black] lg:grid lg:grid-cols-2">
        <div className="col1 bg-[#225abf] min-h-[100vh] flex flex-col gap-3 items-center pt-30">
          <h1 className="text-5xl font-extrabold text-center">Welcome back!</h1>
          <p>Create Your LinkTree Page</p>
          <div className="flex flex-col gap-3 mt-3 items-center">
            <div>
              <div className="font-semibold text-center">
                Step 1:Claim Your Handle
              </div>
              <input
                className="pl-3 py-2 pr-10 bg-white rounded-[10px]"
                type="text"
                placeholder="Enter Your Handle"
                value={Handle}
                onChange={(e) => {
                  setHandle(e.target.value);
                }}
              />
            </div>
            <div className="font-semibold mt-3">Step 2:Enter Your Links</div>
            {LinkAndText &&
              LinkAndText.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-3">
                    <div>
                      <input
                        className="pl-3 py-2 pr-10 bg-white rounded-[10px]"
                        type="text"
                        placeholder="Enter Link"
                        value={item.Link}
                        onChange={(e) => {
                          handlechange(index, e.target.value, item.LinkText);
                        }}
                      />
                    </div>
                    <div>
                      <input
                        className="pl-3 py-2 pr-10 bg-white rounded-[10px]"
                        type="text"
                        placeholder="Enter Link Text"
                        value={item.LinkText}
                        onChange={(e) => {
                          handlechange(index, item.Link, e.target.value);
                        }}
                      />
                    </div>
                    <div className="h-[1px] bg-[#f19af1]"></div>
                  </div>
                );
              })}
            <button
              className="px-5 py-3 bg-white  hover:bg-[#d0cfcf] font-semibold rounded-[10px] w-fit"
              onClick={() => handleAddLink()}
            >
              + Add Link
            </button>
            <div className="flex flex-col items-center gap-3">
              <div className="font-semibold text-center">
                Step 3:Enter Your description (optional and &lt; 64 characters)
              </div>
              <input
                className="pl-3 py-2 pr-10 bg-white rounded-[10px]"
                type="text"
                placeholder="Enter Your Description"
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center justify-center gap-2 mt-3">
                <div className="font-semibold text-center">
                  Step 4: i. Enter Your Profile Picture
                </div>
                <input
                  className="pl-3 py-2 pr-10 bg-white rounded-[10px]"
                  type="text"
                  placeholder="Profile Pic Link"
                  value={profilepic}
                  onChange={(e) => {
                    setprofilepic(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 mt-3">
                <div className="font-semibold  text-center">
                  ii. Enter Your page's background color
                </div>
                <input
                  className="pl-3 py-2 pr-10 bg-white rounded-[10px]"
                  type="text"
                  placeholder="Enter Hex color"
                  value={bgcolor}
                  onChange={(e) => {
                    setbgcolor(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              className="px-5 py-3 bg-white disabled:bg-[#a5a3a3]  hover:bg-[#d0cfcf] font-semibold rounded-[10px] w-fit mx-auto my-5"
              onClick={() => handleClick()}
              disabled={
                profilepic == "" ||
                Handle == "" ||
                LinkAndText[0].Link == "" ||
                LinkAndText[0].LinkText == ""
              }
            >
              Done
            </button>
          </div>
        </div>
        <div className="col2 bg-[#225abf] w-full min-h-[100vh] lg:flex justify-center hidden">
          <img
            src="https://assets.production.linktr.ee/auth/2442/media/banner-login-desktop.5084c2cf19da310f7e78.png"
            alt=""
            className="object-contain h-screen lg:mt-30"
          />
        </div>
      </div>
    </>
  );
};

export default Generate;
