import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'


export function TopBanner(){
    return (
<header class="flex flex-row w-full h-auto justify-evenly align-center pt-2 gap-5 bg-dark font-semibold text-light sticky top-0 z-[100] text-[clamp(0.5rem,0.7vw+0.25rem,0.875rem)]">
    {/* Socials */}

          <div class="flex items-center justify-center gap-5 ">
            <a href="https://maps.app.goo.gl/8wiPW2HTwWQB3ZQp9">
            <img class="w-4" src="/icons/google.png" alt="Our Google Page" /> 
            </a>
            
            <a href="https://www.yelp.com/biz/sage-tech-portland">
              <img class="w-4" src="/icons/yelp_burst.png" alt="Our Yelp Page" />
            </a>
            <a href="https://facebook.com/sagetechpdx">
              <img class="w-4" src="/icons/Facebook_Logo_Primary.png" alt="Our Facebook Page" />
            </a>
          </div>

    {/* Email */}
        
        <a class="flex flex-row items-center justify-center w-auto gap-2 hover:text-light" href="mailto:info@sagetech.support">
            <img class="w-4" src="/icons/mail.png" alt="Email Us" />
            <div class="hidden md:flex">info@sagetech.support</div>
        </a>


    {/* Phone */}
        <a class="flex flex-row items-center justify-center w-auto gap-2 hover:text-light" href="tel:5034546438">
            <img class="w-4" src="/icons/call.png" alt="Call Us" />
            <div class="hidden md:flex">(503) 454-6438</div>
        </a>

    {/* SMS */}

        <a class="flex flex-row items-center justify-center gap-2 hover:text-light" href="sms:15034546438">
            <img class="w-4" src="/icons/chat.png" alt="Text Us" />
            <span class="hidden md:inline">(503) 454-6438</span>
        </a>
    

    {/* Hours */}
    <div class="flex flex-row items-center justify-center w-auto gap-2">
        <img class="w-4" src="/icons/schedule.png" alt="Our Hours" />
        <div class="hidden md:flex">Monday-Friday 8am-7pm</div>
        <div class="flex md:hidden">M-F 8am-7pm</div>
    </div>
</header>
    )
}