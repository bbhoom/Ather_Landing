import { useState } from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="bg-black py-4 px-6 border-b border-gray-800">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-yellow-500 mr-2 flex items-center justify-center">
                            <img src="/assets/logo.jpg" alt="logo" />
                        </div>
                        <h1 className="text-2xl font-bold text-yellow-500">
                            AETHER <span className="text-white text-xl">by Mythreyi</span>
                        </h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        {/* Direct links to main page sections */}
                        <a href="/#home" className="text-white hover:text-yellow-500 transition duration-300">HOME</a>
                        <a href="/#about" className="text-white hover:text-yellow-500 transition duration-300">ABOUT</a>
                        <a href="/#master-plan" className="text-white hover:text-yellow-500 transition duration-300">PLOTS</a>
                        <a href="/#gallery" className="text-white hover:text-yellow-500 transition duration-300">GALLERY</a>
                        <a href="/#amenities" className="text-white hover:text-yellow-500 transition duration-300">AMENITIES</a>
                        <a href="/#location" className="text-white hover:text-yellow-500 transition duration-300">LOCATION</a>
                        <a href="/#contact" className="text-white hover:text-yellow-500 transition duration-300">CONTACT</a>
                    </nav>
                    <a
                        href="/#contact"
                        className="bg-yellow-500 text-black px-4 py-2 font-bold hover:bg-yellow-600 transition duration-300 inline-block"
                    >
                        BOOK NOW
                    </a>

                </div>
            </header>

            {/* Main Content - Without excess padding */}
            <main className="container mx-auto py-2">
                <div className="max-w-7xl mx-auto bg-gray-900 p-6 rounded-lg shadow-xl">
                    <h1 className="text-3xl font-bold text-yellow-500 mb-8 border-b border-gray-700 pb-4" id="top">Privacy Policy</h1>

                    <div className="space-y-6 text-gray-200">
                        <p>
                            This privacy policy sets out how "Aether" uses and protects any information that you give "Aether" when you use this website.
                        </p>

                        <p>
                            "Aether" is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
                        </p>

                        <p>
                            "Aether" may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
                        </p>

                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-3 mt-8">What We Collect</h2>
                            <p className="mb-4">We may collect the following information:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Name and Job Title.</li>
                                <li>Contact Information including Email address.</li>
                                <li>Demographic information such as Post code, Preferences and interests.</li>
                                <li>Other information relevant to customer surveys and/or offers.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-3 mt-8">What We Do With The Information We Gather</h2>
                            <p className="mb-4">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Internal record keeping.</li>
                                <li>We may use the information to improve our products and services.</li>
                                <li>We may periodically send promotional email about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                                <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-3 mt-8">Security</h2>
                            <p>
                                We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-3 mt-8">How We Use Cookies</h2>
                            <p className="mb-4">
                                A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                            </p>
                            <p className="mb-4">
                                We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                            </p>
                            <p>
                                You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-3 mt-8">Links To Other Websites</h2>
                            <p>
                                Our website may contain links to enable you to visit other websites of interest easily. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-3 mt-8">Controlling Your Personal Information</h2>
                            <p className="mb-4">You may choose to restrict the collection or use of your personal information in the following ways:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</li>
                                <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us.</li>
                            </ul>
                            <p className="mt-4">
                                We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law. We may use your personal information to send you promotional information about Aiekya Corporation which we think you may find interesting.
                            </p>
                            <p className="mt-4">
                                When you voluntarily send us electronic mail, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* No footer included here */}
        </div>
    );
}