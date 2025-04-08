import { FaPhone, FaWhatsapp, FaInstagram, FaFacebookF, FaWaze } from 'react-icons/fa';

export const socialLinks = [
  {
    id: 'phone',
    icon: FaPhone,
    url: 'tel:+972123456789',
    ariaLabel: 'Call us'
  },
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    url: 'https://wa.me/972123456789',
    ariaLabel: 'Contact on WhatsApp'
  },
  {
    id: 'instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/manhattancar_israel?igsh=aTQ3dnE2MXJzaTU4',
    ariaLabel: 'Visit our Instagram'
  },
  {
    id: 'facebook',
    icon: FaFacebookF,
    url: 'https://facebook.com/seacar',
    ariaLabel: 'Visit our Facebook'
  },
  {
    id: 'waze',
    icon: FaWaze,
    url: 'https://waze.com/ul?ll=32.123456,34.123456&navigate=yes',
    ariaLabel: 'Navigate to us with Waze'
  }
];

export const footerColumns = [
  {
    id: 'hours',
    title: 'שעות פעילות:',
    items: [
      { text: 'א׳-ה׳: 10:00 - 20:00' },
      { text: 'ו׳: 10:00 - 13:00' }
    ]
  },
  {
    id: 'services',
    title: 'השירותים שלנו:',
    items: [
      { text: '100% מימון', url: '/services/financing' },
      { text: 'טרייד אין', url: '/services/trade-in' },
      { text: 'רכבים 0 ק״מ', url: '/services/new-cars' },
      { text: 'מכוניות יד ראשונה...', url: '/services/used-cars' }
    ]
  },
  {
    id: 'address',
    title: 'כתובת:',
    items: [
      { text: 'הרצל רוטשילד 8, תל אביב מתחם סי אנד סאן' }
    ]
  }
];