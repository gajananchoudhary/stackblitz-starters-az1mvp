import React from 'react';
import { navLinks } from '../Navlink';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={`${styles.footerContainerOne}`}>
          <Link href="/">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="164"
              height="48"
              viewBox="0 0 164 48"
            >
              <path
                fill="#FFB441"
                d="M27.1,7.7c0.5,0.1,1.1,0.2,1.6,0.4c2,0.8,3.4,2.7,3.4,4.9c0,7.2,0,14.4,0,21.6c0,2.6-2.1,4.9-4.7,5.2 c0,0-0.1,0-0.1,0c-7.5,0-15,0-22.5,0c-0.4-0.1-0.7-0.1-1.1-0.2C1.5,38.8,0,36.8,0,34.4c0-7,0-14,0-20.9c0-0.3,0-0.6,0-0.9 c0.2-2.2,1.4-3.7,3.4-4.5c0.5-0.2,1-0.3,1.6-0.4C12.4,7.7,19.7,7.7,27.1,7.7z M16.8,13c0.1,0,0.1,0,0.2,0c3.5,0,7,0,10.5,0 c0.5,0,0.9-0.3,0.9-0.8c0-0.5-0.3-0.8-0.9-0.8c-7.6,0-15.3,0-22.9,0c-0.5,0-0.9,0.3-0.9,0.8C3.7,12.7,4,13,4.6,13c3.5,0,7,0,10.5,0 c0.1,0,0.1,0,0.2,0c0,0.9,0,1.8,0,2.7c-4.2,0.5-7.1,3.6-7.3,7.8c-0.1,1.9,0.5,3.6,1.6,5.1c1.4,1.9,3.4,3,5.7,3.2c0,0.1,0,0.1,0,0.2 c0,1.1,0,2.1,0,3.2c0,0.5,0.3,0.8,0.8,0.8c0.4,0,0.7-0.3,0.7-0.8c0-0.8,0-1.6,0-2.3c0-0.3,0-0.7,0-1c2.1-0.2,3.8-1.1,5.2-2.6 c1.4-1.5,2.1-3.4,2.1-5.4c0-1.9-0.6-3.5-1.7-5c-1.4-1.8-3.3-2.8-5.6-3.1C16.8,14.8,16.8,13.9,16.8,13z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M70.7,14.9c2.6,0,5.1-0.1,7.6,0c1.7,0.1,3.2,0.7,4.3,2.2c2.1,2.9,0.6,6.8-2.9,7.8c-0.1,0-0.1,0-0.2,0.1 c1.7,2.6,3.4,5.2,5.1,7.8c-0.9,0-1.7,0-2.6,0c-1.6-2.5-3.2-4.9-4.9-7.4c-1.4,0-2.8,0-4.3,0c0,2.5,0,4.9,0,7.4c-0.7,0-1.4,0-2.2,0 C70.7,26.7,70.7,20.8,70.7,14.9z M81.2,19.8c0-1.4-0.8-2.3-2.1-2.7c-0.5-0.1-1-0.2-1.5-0.2c-1.5,0-3,0-4.5,0c-0.1,0-0.1,0-0.2,0 c0,2.1,0,4.2,0,6.4c0,0,0,0,0,0c1.8,0,3.7,0,5.5-0.1c1.7-0.1,2.8-1.2,2.8-2.9l0,0l0,0C81.2,20.1,81.2,20,81.2,19.8 C81.2,19.8,81.2,19.8,81.2,19.8C81.2,19.8,81.2,19.8,81.2,19.8z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M159,24.9c1.7,2.6,3.4,5.2,5,7.7c0,0,0,0,0,0c-0.8,0-1.7,0-2.5,0c-1.6-2.5-3.2-4.9-4.9-7.4c-1.4,0-2.8,0-4.3,0 c0,2.5,0,4.9,0,7.4c-0.7,0-1.4,0-2.2,0c0-5.9,0-11.9,0-17.9c0.1,0,0.1,0,0.2,0c2.2,0,4.5,0,6.7,0c1.6,0,3.1,0.4,4.3,1.5 c1.3,1.2,1.7,2.7,1.5,4.3c-0.2,2.2-1.6,3.6-3.8,4.2C159.1,24.9,159,24.9,159,24.9z M152.3,16.9c0,2.1,0,4.2,0,6.4 c0.1,0,0.1,0,0.2,0c1.4,0,2.8,0,4.2,0c0.4,0,0.9,0,1.3-0.1c1.1-0.2,2.1-0.7,2.4-1.9c0.1-0.4,0.2-0.9,0.2-1.4c0-1.5-0.8-2.5-2.3-2.8 c-0.3-0.1-0.6-0.1-0.9-0.1C155.8,16.9,154.1,16.9,152.3,16.9z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M87.6,24.5c-0.1-1.7,0.1-3.5,0.7-5.1c1.3-3.2,4.1-5,7.7-4.9c2.2,0.1,4.1,0.7,5.7,2.3c1.3,1.3,2,3,2.3,4.8 c0.3,2.3,0.2,4.5-0.7,6.6c-1.3,2.9-3.5,4.4-6.6,4.7c-2,0.2-3.8-0.2-5.5-1.3c-1.9-1.3-2.9-3.1-3.3-5.3 C87.7,25.7,87.6,25.1,87.6,24.5C87.6,24.5,87.6,24.5,87.6,24.5L87.6,24.5z M89.8,24.2c0.1,0.6,0.1,1.1,0.2,1.7 c0.5,2.6,2.2,4.8,5.2,5c2.7,0.2,5-0.9,6-3.6c0.6-1.5,0.7-3.1,0.5-4.7l0,0c0,0,0,0,0,0c0-0.3-0.1-0.7-0.1-1c-0.6-3-2.6-4.8-5.5-5 c-2.5-0.1-4.6,1.1-5.6,3.4c-0.5,1.1-0.6,2.2-0.7,3.3c0,0,0,0,0,0c0,0,0,0,0,0C89.8,23.6,89.8,23.9,89.8,24.2 C89.8,24.2,89.8,24.2,89.8,24.2z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M145.9,30.7c0,0.7,0,1.4,0,2c-4.3,0-8.6,0-12.9,0c0-5.9,0-11.9,0-17.9c4.2,0,8.3,0,12.5,0c0,0.7,0,1.3,0,2 c-3.4,0-6.9,0-10.3,0c0,1.9,0,3.8,0,5.8c2.7,0,5.3,0,8,0c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0,2,0,4,0,6 C138.7,30.7,142.3,30.7,145.9,30.7z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M66.5,30.7c0,0.7,0,1.4,0,2c-4.3,0-8.6,0-12.9,0c0-6,0-11.9,0-17.9c4.2,0,8.3,0,12.5,0c0,0.7,0,1.3,0,2 c-3.4,0-6.9,0-10.3,0c0,1.9,0,3.8,0,5.8c2.7,0,5.4,0,8,0c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0,2,0,4,0,6 C59.3,30.7,62.9,30.7,66.5,30.7z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M48.9,14.8c0,0.6,0,1.2,0,1.9c0,0.1-0.1,0.1-0.1,0.2c-3.6,4.5-7.3,9.1-10.9,13.6c0,0-0.1,0.1-0.1,0.1 c3.8,0,7.6,0,11.4,0c0,0.7,0,1.4,0,2c-4.7,0-9.3,0-14,0c0-0.6,0-1.3,0-1.9c0-0.1,0.1-0.2,0.1-0.2c3.6-4.5,7.2-9,10.8-13.5 c0,0,0.1-0.1,0.1-0.2c-3.6,0-7.2,0-10.8,0c0-0.7,0-1.4,0-2C39.9,14.8,44.4,14.8,48.9,14.8z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M112.9,16.9c-2.1,0-4.1,0-6.2,0c0-0.7,0-1.3,0-2c4.9,0,9.7,0,14.6,0c0,0.7,0,1.3,0,2c-2.1,0-4.1,0-6.2,0 c0,5.3,0,10.6,0,15.8c-0.7,0-1.4,0-2.2,0C112.9,27.4,112.9,22.2,112.9,16.9z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M125.1,14.8c0.7,0,1.4,0,2.1,0c0,5.9,0,11.9,0,17.9c-0.7,0-1.4,0-2.1,0C125.1,26.7,125.1,20.8,125.1,14.8z"
              ></path>
              <polygon
                fill="#FFB441"
                points="87.6,24.5 87.6,24.5 87.6,24.5 87.6,24.5 	"
              ></polygon>
              <path
                fill="#000000"
                d="M16.8,13c0,0.9,0,1.8,0,2.6c2.3,0.3,4.2,1.3,5.6,3.1c1.1,1.5,1.7,3.1,1.7,5c0,2.1-0.7,3.9-2.1,5.4 c-1.4,1.5-3.1,2.4-5.2,2.6c0,0.4,0,0.7,0,1c0,0.8,0,1.6,0,2.3c0,0.5-0.3,0.8-0.7,0.8c-0.4,0-0.8-0.3-0.8-0.8c0-1.1,0-2.1,0-3.2 c0-0.1,0-0.1,0-0.2c-2.4-0.3-4.3-1.3-5.7-3.2c-1.1-1.5-1.7-3.2-1.6-5.1c0.2-4.2,3.1-7.3,7.3-7.8c0-0.9,0-1.8,0-2.7c0,0-0.1,0-0.2,0 c-3.5,0-7,0-10.5,0c-0.5,0-0.9-0.3-0.9-0.8c0-0.5,0.3-0.8,0.9-0.8c7.6,0,15.3,0,22.9,0c0.5,0,0.9,0.3,0.9,0.8 c0,0.5-0.3,0.8-0.9,0.8c-3.5,0-7,0-10.5,0C16.9,13,16.9,13,16.8,13z M16.8,30.2c3.1-0.3,6-3.1,5.7-6.9c-0.2-3.8-3.3-5.9-5.7-6.1 C16.8,21.6,16.8,25.9,16.8,30.2z M15.3,30.2c0-4.3,0-8.6,0-13c-3,0.3-5.8,3-5.7,6.6C9.6,27.5,12.4,30,15.3,30.2z"
              ></path>
              <path
                fill="#FFB441"
                d="M81.2,19.8C81.2,19.8,81.2,19.8,81.2,19.8C81.2,19.8,81.2,19.8,81.2,19.8C81.2,19.8,81.2,19.8,81.2,19.8 C81.2,19.8,81.2,19.8,81.2,19.8z"
              ></path>
              <polygon
                fill="#FFB441"
                points="81.2,20.3 81.2,20.3 81.2,20.3 81.2,20.3 	"
              ></polygon>
              <path
                fill="#FFFFFF"
                d="M89.8,24.1C89.8,24.2,89.8,24.2,89.8,24.1C89.8,24.2,89.8,24.2,89.8,24.1z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M89.8,23.3C89.8,23.3,89.8,23.3,89.8,23.3C89.8,23.4,89.8,23.4,89.8,23.3C89.8,23.4,89.8,23.3,89.8,23.3 C89.8,23.3,89.8,23.3,89.8,23.3z"
              ></path>
              <polygon
                fill="#FFB441"
                points="101.8,22.6 101.8,22.6 101.8,22.6 101.8,22.6 	"
              ></polygon>
              <path
                fill="#FFB441"
                d="M16.8,30.2c0-4.3,0-8.6,0-12.9c2.4,0.2,5.5,2.3,5.7,6.1C22.8,27.1,19.9,29.9,16.8,30.2z"
              ></path>
              <path
                fill="#FFB441"
                d="M15.3,30.2c-2.9-0.3-5.7-2.8-5.7-6.4c-0.1-3.6,2.7-6.3,5.7-6.6C15.3,21.6,15.3,25.9,15.3,30.2z"
              ></path>
            </svg>
          </Link>
          <p>Securely Connecting The World's Devices.</p>
        </div>
        <div className={`${styles.footerContainerTwo}`}>
          <div>
            <p>GET STARTED</p>
            <p>
              <Link href="/download">Download</Link>
            </p>
            <p>
              <Link href="https://github.com/zerotier">GitHub</Link>
            </p>
            <p>
              <Link href="https://github.com/zerotier/libzt#zerotier-sockets">
                SDK
              </Link>
            </p>
            <p>
              <Link href="https://www.zerotier.com/partners/">Partners</Link>
            </p>
          </div>
          <div>
            <p>SUPPORT</p>
            <p>
              <Link href="https://docs.zerotier.com/?_gl=1*1o1yta6*_up*MQ..*_ga*MTA2MDQ3NTA0LjE2OTMzNjgyOTA.*_ga_NX38HPVY1Z*MTY5MzM2ODI4NS4xLjAuMTY5MzM2ODI4NS4wLjAuMA..">
                Documentation
              </Link>
            </p>
            <p>
              <Link href="https://zerotier.atlassian.net/wiki/spaces/SD/overview">
                Knowledge Base
              </Link>
            </p>
            <p>
              <Link href="https://discuss.zerotier.com/?_gl=1*1o1yta6*_up*MQ..*_ga*MTA2MDQ3NTA0LjE2OTMzNjgyOTA.*_ga_NX38HPVY1Z*MTY5MzM2ODI4NS4xLjAuMTY5MzM2ODI4NS4wLjAuMA..">
                Community
              </Link>
            </p>
            <p>
              <Link href="https://docs.zerotier.com/getting-started/getting-started/?_gl=1*1hkxvxf*_up*MQ..*_ga*MTA2MDQ3NTA0LjE2OTMzNjgyOTA.*_ga_NX38HPVY1Z*MTY5MzM2ODI4NS4xLjAuMTY5MzM2ODI4NS4wLjAuMA..">
                Getting Started
              </Link>
            </p>
          </div>
          <div>
            <p>COMPANY</p>
            <p>
              <Link href="/contact">Contact</Link>
            </p>
            <p>
              <Link href="https://www.zerotier.com/about/">About Us</Link>
            </p>
            <p>
              <Link href="https://jobs.lever.co/zerotier">Careers</Link>
            </p>
            <p>
              <Link href="https://www.zerotier.com/blog/">Blog</Link>
            </p>
            <p>
              <Link href="https://www.zerotier.com/media-kit/">Media Kit</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={`container ${styles.socialContainer}`}>
        <Link href="https://github.com/zerotier" className={styles.socialIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Link>
        <Link
          href="https://linkedin.com/company/zerotier"
          className={styles.socialIcon}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </Link>
        <Link
          href="https://youtube.com/ZeroTierOfficial"
          className={styles.socialIcon}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </Link>
        <Link
          href="https://facebook.com/zerotier"
          className={styles.socialIcon}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </Link>
        <Link href="https://twitter.com/zerotier" className={styles.socialIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </Link>
        <Link
          href="https://social.zerotier.com/@zerotier"
          className={styles.socialIcon}
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M21.6,14.3c-0.3,1.5-2.5,3.1-5.1,3.4 c-1.3,0.2-2.7,0.3-4.1,0.2c-2.3-0.1-4.1-0.6-4.1-0.6c0,0.2,0,0.4,0,0.6c0.3,2.3,2.3,2.4,4.1,2.5c1.9,0.1,3.6-0.5,3.6-0.5l0.1,1.7 c0,0-1.3,0.7-3.7,0.8c-1.3,0.1-2.9,0-4.8-0.5c-4.1-1.1-4.7-5.4-4.9-9.8c0-1.3,0-2.5,0-3.6c0-4.5,2.9-5.8,2.9-5.8c1.5-0.7,4-1,6.7-1 h0.1c2.6,0,5.2,0.3,6.7,1c0,0,2.9,1.3,2.9,5.8C22,8.7,22,12,21.6,14.3"
            ></path>
            <path
              fill="currentColor"
              d="M18.5,9v5.4h-2.2V9.2c0-1.1-0.5-1.7-1.4-1.7c-1,0-1.6,0.7-1.6,2v2.9h-2.1V9.5c0-1.3-0.5-2-1.6-2c-0.9,0-1.4,0.6-1.4,1.7v5.3 H6.2V9c0-1.1,0.3-2,0.8-2.6c0.6-0.7,1.4-1,2.3-1c1.1,0,1.9,0.4,2.5,1.3l0.5,0.9l0.5-0.9c0.6-0.8,1.4-1.3,2.5-1.3c1,0,1.7,0.3,2.3,1 C18.2,7.1,18.5,7.9,18.5,9"
            ></path>
          </svg>
        </Link>
      </div>
      <div className={`container ${styles.termsPolicy}`}>
        <p>© 2023 ZeroTier, Inc. All rights reserved.</p>
        <div>
          <Link
            href="https://www.zerotier.com/terms/"
            className={styles.socialIcon}
          >
            Terms
          </Link>
          <Link
            href="https://www.zerotier.com/privacy/"
            className={styles.socialIcon}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
