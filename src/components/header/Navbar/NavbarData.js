export const menuItemsData = [
    {
      title: "Home",
      url: "",
    },

    {
      title: "About Us",
      url: "about-us",
    },
  
    {
      title: "Services",
      // url: "services",
      submenu : [
        {
          title: 'Design Services',
          menuItems: [
            {
              title: 'App Development',
              url: 'app-development'
            },
            {
              title: 'Website Development',
              url: 'web-development'
            },
            {
              title: 'Sales Funnel Fixing',
              url: 'sales-funnel-fixing'
            },
            {
              title: 'Website Annual Maintenance',
              url: 'website-annual-maintenance'
            },
            {
              title: 'CRM',
              url: 'crm'
            },   
    
          ]
        },
        {
          title: 'Digital Marketing',
          menuItems: [
            {
              title: "Search engines optimization",
              url: "seo",
            },
            {
              title: "Social media marketing",
              url: "smo",
            },
            {
              title: "Google my business",
              url: "gmb",
            },
            {
              title: 'Content Writing',
              url: 'content-writing'
            },
            {
              title: 'Link Building',
              url: 'link-building'
            },
    
          ]
        }
      ],
    },
    {
      title: 'Portfolio',
      url: "portfolio",
    },
  
    {
      title: "Contact Us",
      url: "contact-us",
    },
  ];
  