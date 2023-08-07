import React, { useState } from 'react';
import "./Pricing.css"
import basicImage from "../../Assets/pricing/basic.png"
import dropShadow from "../../Assets/pricing/dropShadow.png"
import checkBox from "../../Assets/pricing/checkbox_base.png"
import customShadow from "../../Assets/pricing/customShadow.png"
import reflection from "../../Assets/pricing/reflection.png"
import keepShdow from "../../Assets/pricing/custom.png"
import webSize from "../../Assets/pricing/websize.png"
import margin from "../../Assets/pricing/margin.png"
import adjustment from "../../Assets/pricing/adjustment.png"
import retouch from "../../Assets/pricing/retouch.png"
import checkMark from "../../Assets/pricing/checkbox.png"
import flatRate from "../../Assets/pricing/flatRate.png"
import medium from "../../Assets/pricing/medium.png"
import superComplex from "../../Assets/pricing/superComplex.png"
import complex from "../../Assets/pricing/complex.png"
import checkBoxRight from "../../Assets/pricing/checkBoxRight.png"
// import photoRetouching from "../../Assets/pricing/photoRetouching.png"
// import checkBoxRound from "../../Assets/pricing/_Checkbox_round.png"
import { FaPlus, FaMinus } from "react-icons/fa";
import Swal from 'sweetalert2';

const Pricing = () => {

    const [activeBtn, setActiveBtn] = useState("Clipping Path");
    const [add, setAdd] = useState(1)
    const [value, setValue] = useState(3)
    const [service, setService] = useState("Basic")
    const [right, setRight] = useState(true)
    const [rightTwo, setRightTwo] = useState(true)
    const [rightThree, setRightThree] = useState(true)
    const [rightFour, setRightFour] = useState(true)



    const handleClick = (btn) => {
        setActiveBtn(btn);
    };

    const handleServiceClick = (btn) => {
        setService(btn);
    };

    const handleMinus = () => {
        if (add < 2) {
            return Swal.fire(
                'Opps!',
                'Value Can Not Be Less Than One!',
                'Error'
            )
        } else {
            return setAdd(add - 1)
        }
    }

    const handleRight = () => {
        setRight(!right)
    }

    const handleRightTwo = () => {
        setRightTwo(!rightTwo)
    }
    const handleRightThree = () => {
        setRightThree(!rightThree)
    }

    const handleRightFour = () => {
        setRightFour(!rightFour)
    }


    // console.log(minusBtn);

    return (
        <div className='pricingContainer'>
            <div className='container mx-auto'>
                <h1 className='text-center text-4xl font-bold p-4'>Check Our Pricing</h1>
                <p className='text-center -mt-[10px] font-medium'>Introducing a simpler and economical way to get <br /> the best photo editing solutions for Pro-photographers, Fashion, Apparel,</p>
            </div>
            <div className='flex items-center justify-center mt-6 gap-4'>
                <button onClick={() => handleClick('Clipping Path')} className={activeBtn === 'Clipping Path' ? "priceActiveBtn" : "priceBtn"} >Clipping Path</button>
                <button onClick={() => handleClick('Photo Retouching')} className={activeBtn === 'Photo Retouching' ? "priceActiveBtn" : "priceBtn"} >Photo Retouching</button>
                <button onClick={() => handleClick('Ghost Mannequin')} className={activeBtn === 'Ghost Mannequin' ? "priceActiveBtn" : "priceBtn"} >Ghost Mannequin</button>
                <button onClick={() => handleClick('Image Masking')} className={activeBtn === 'Image Masking' ? "priceActiveBtn" : "priceBtn"} >Image Masking</button>
            </div>
            <div className='pricingContentContainer 2xl:w-[1200px]'>
                <div className='grid lg:grid-cols-2 gap-[50px]'>
                    <div>
                        {service === "Basic" && <img src={basicImage} alt="Light House Basic" />}
                        {service === "Flat Rate" && <img src={flatRate} alt="Light House Flat Rate" />}
                        {service === "Medium" && <img src={medium} alt="Light House Medium" />}
                        {service === "Complex" && <img src={complex} alt="Light House Complex" />}
                        {service === "Super Complex" && <img src={superComplex} alt="Light House Super Complex" />}


                        <div className='mt-[10px] flex gap-4'>
                            <button onClick={() => handleServiceClick('Basic')} className={service === 'Basic' ? "activeBtn" : "defaultBtn"}>Basic</button>
                            <button onClick={() => handleServiceClick('Flat Rate')} className={service === 'Flat Rate' ? "activeBtn" : "defaultBtn"}>Flat Rate</button>
                            <button onClick={() => handleServiceClick('Medium')} className={service === 'Medium' ? "activeBtn" : "defaultBtn"}>Medium</button>
                            <button onClick={() => handleServiceClick('Complex')} className={service === 'Complex' ? "activeBtn" : "defaultBtn"}>Complex</button>
                            <button onClick={() => handleServiceClick('Super Complex')} className={service === 'Super Complex' ? "activeBtn" : "defaultBtn"}>Super Complex</button>
                        </div>
                        <div className='mt-[16px]'>
                            <h6>Select Any of Four Services</h6>
                            <div className='grid lg:grid-cols-2 mt-[10px] gap-[10px]'>
                                <div>
                                    <div className='additionalServiceContainer'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={dropShadow} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Drop Shadow</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={checkBox} alt="LightHouse CheckBox" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='additionalServiceContainer mt-[12px]'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={reflection} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Reflection</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <img src={checkBox} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='additionalServiceContainer'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={customShadow} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Custom Shadow</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <img src={checkBox} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='additionalServiceContainer mt-[12px]'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={keepShdow} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Keep Shadow</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <img src={checkBox} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[16px]'>
                            <h6>You Can Select One Or All</h6>
                            <div className='grid lg:grid-cols-2 mt-[10px] gap-[10px]'>
                                <div>
                                    <div className='additionalServiceContainer'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={webSize} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Web Size</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div onClick={handleRight}>
                                                    {
                                                        right ? <img src={checkMark} alt="LightHouse CheckBox" /> : <img src={checkBoxRight} alt="LightHouse CheckBox" />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='additionalServiceContainer mt-[12px]'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={adjustment} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Adjustment</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div onClick={handleRightTwo}>
                                                    {
                                                        rightTwo ? <img src={checkMark} alt="LightHouse CheckBox" /> : <img src={checkBoxRight} alt="LightHouse CheckBox" />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='additionalServiceContainer'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={margin} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Margin</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div onClick={handleRightThree}>
                                                    {
                                                        rightThree ? <img src={checkMark} alt="LightHouse CheckBox" /> : <img src={checkBoxRight} alt="LightHouse CheckBox" />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='additionalServiceContainer mt-[12px]'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={retouch} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Retouch</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div onClick={handleRightFour}>
                                                    {
                                                        rightFour ? <img src={checkMark} alt="LightHouse CheckBox" /> : <img src={checkBoxRight} alt="LightHouse CheckBox" />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pricingCalculator'>
                        <h6 className='font-medium text-[20px]'>{activeBtn}</h6>
                        <h3 className='font-bold text-sky-600 text-[60px] -mt-[10px]'>${value * add}.00<span className='text-[40px]'>/img</span></h3>
                        <h6 className='font-medium text-[20px] -mt-[10px]'>Complexity: <span className='font-bold text-sky-600'>{service}</span></h6>
                        {/* Pricing */}
                        <div className='mt-[30px]'>
                            <div className='flex justify-between font-medium'>
                                <p>Drop Shadow</p>
                                <p>$0.50</p>
                            </div>
                            <div>
                               {
                                right ?  "" : <div  className='flex justify-between font-medium mt-[20px]'>
                                     <p>Web Size</p>
                                    <p>$0.50</p>
                                </div> 
                               }
                            </div>
                             <div>
                                {
                                    rightTwo ? "" :  <div className='flex justify-between font-medium mt-[20px]'>
                                    <p>Adjustment</p>
                                    <p>$0.50</p>
                                </div>
                                }
                             </div>
                             {
                                rightThree ? "" : <div className='flex justify-between font-medium mt-[20px]'><p>Margin</p> <p>$0.50</p></div>
                             }
                            
                            {
                                rightFour ? "" : <div className='flex justify-between font-medium mt-[20px]'><p>Retouch</p> <p>$0.50</p></div>
                             }
                            <div className='flex justify-between font-bold mt-[20px]'>
                                <p>Per Image Sub-Total</p>
                                <p>$3.00</p>
                            </div>
                        </div>
                        {/* Pricing Calculation */}
                        <div className='mt-[40px]'>
                            <p className='text-[18px] font-medium'>Image Calculator</p>
                            <p className='mt-[6px] font-medium'>Select How Many Images You Need</p>
                            <div className='flex items-center justify-center gap-[15px]'>
                                <button onClick={handleMinus}><FaMinus className='text-[30px]' /></button>
                                <p className='font-bold text-[60px]'>${add}</p>
                                <button onClick={() => setAdd(add + 1)}><FaPlus className='text-[30px]' /></button>
                            </div>
                        </div>
                        <div className='flex justify-between font-bold text-[30px]'>
                            <p>Total</p>
                            <p>$0.50</p>
                        </div>
                        <div className='mt-[30px]'>
                            <button className='bg-sky-600 px-14 py-4 w-full border rounded-lg text-white font-bold text-[20px]'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;