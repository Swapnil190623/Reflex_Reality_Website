import React from 'react';

function Footer() {
  return (
    <footer className="px-4 divide-y bg-[#1F3042] text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-gray-50">
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">Brand name</span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Features</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Integrations</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Pricing</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Privacy</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-50">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Public API</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Documentation</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Guides</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.703-0.084 2.865-0.349 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.781 1.849-2.833 0.396-1.020 0.661-2.176 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.349-2.865-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.781-1.443-2.833-1.849-1.020-0.396-2.176-0.661-3.885-0.745-1.702-0.077-2.244-0.093-6.593-0.093zm0 4c1.179 0 2.25 0.226 3.265 0.645 1.045 0.436 1.949 1.03 2.748 1.828 0.798 0.799 1.392 1.702 1.828 2.748 0.419 1.015 0.645 2.086 0.645 3.265s-0.226 2.25-0.645 3.265c-0.436 1.045-1.03 1.949-1.828 2.748-0.799 0.798-1.702 1.392-2.748 1.828-1.015 0.419-2.086 0.645-3.265 0.645s-2.25-0.226-3.265-0.645c-1.045-0.436-1.949-1.03-2.748-1.828-0.798-0.799-1.392-1.702-1.828-2.748-0.419-1.015-0.645-2.086-0.645-3.265s0.226-2.25 0.645-3.265c0.436-1.045 1.03-1.949 1.828-2.748 0.799-0.798 1.702-1.392 2.748-1.828 1.015-0.419 2.086-0.645 3.265-0.645zm0 8c-0.597 0-1.196 0.233-1.633 0.65-0.438 0.416-0.65 0.97-0.65 1.565s0.212 1.149 0.65 1.565c0.437 0.416 1.036 0.65 1.633 0.65s1.196-0.233 1.633-0.65c0.438-0.416 0.65-0.97 0.65-1.565s-0.212-1.149-0.65-1.565c-0.437-0.417-1.036-0.65-1.633-0.65z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center text-sm text-gray-500">
        <p>&copy; 2024 Brand Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;






