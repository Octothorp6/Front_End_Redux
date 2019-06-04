export default {
  bigStat: [
    {
      product: "Enos",
      total: {
        monthly: 4232,
        weekly: 1465,
        daily: 199,
        percent: { value: 3.7, profit: false }
      },
      color: "primary",
      registrations: {
        monthly: { value: 830, profit: false },
        weekly: { value: 215, profit: true },
        daily: { value: 33, profit: true }
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true }
      }
    },
    {
      product: "EnConnect",
      total: {
        monthly: 754,
        weekly: 180,
        daily: 27,
        percent: { value: 2.5, profit: true }
      },
      color: "warning",
      registrations: {
        monthly: { value: 32, profit: true },
        weekly: { value: 8, profit: true },
        daily: { value: 2, profit: false }
      },
      bounce: {
        monthly: { value: 2.5, profit: true },
        weekly: { value: 4, profit: false },
        daily: { value: 4.5, profit: false }
      }
    },
    {
      product: "Enchat",
      total: {
        monthly: 1025,
        weekly: 301,
        daily: 44,
        percent: { value: 3.1, profit: true }
      },
      color: "secondary",
      registrations: {
        monthly: { value: 230, profit: true },
        weekly: { value: 58, profit: false },
        daily: { value: 15, profit: false }
      },
      bounce: {
        monthly: { value: 21.5, profit: false },
        weekly: { value: 19.35, profit: false },
        daily: { value: 10.1, profit: true }
      }
    }
  ],
  notifications: [
    {
      id: 0,
      icon: "thumbs-up",
      color: "primary",
      content:
        'Ken <span className="fw-semi-bold">accepts</span> your invitation'
    },
    {
      id: 1,
      icon: "file",
      color: "success",
      content: "Report from LT Company"
    },
    {
      id: 2,
      icon: "envelope",
      color: "danger",
      content: '4 <span className="fw-semi-bold">Private</span> Mails'
    },
    {
      id: 3,
      icon: "comment",
      color: "success",
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post'
    },
    {
      id: 4,
      icon: "cog",
      color: "light",
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app'
    },
    {
      id: 5,
      icon: "bell",
      color: "info",
      content:
        '15 <span className="fw-semi-bold">Notifications</span> from Social Apps'
    }
  ],
  supportTable: [
    {
      id: 0,
      name: "Mark Otto",
      email: "ottoto@wxample.com",
      date: "11 May 2017",
      city: "Otsego",
      status: "Shipped"
    },
    {
      id: 1,
      name: "Jacob Thornton",
      email: "thornton@wxample.com",
      date: "4 Jun 2017",
      city: "Fivepointville",
      status: "Pending"
    },
    {
      id: 2,
      name: "Larry the Bird",
      email: "bird@wxample.com",
      date: "27 Aug 2017",
      city: "Leadville North",
      status: "Delivered"
    },
    {
      id: 3,
      name: "Joseph May",
      email: "josephmay@wxample.com",
      date: "19 Feb 2018",
      city: "Seaforth",
      status: "Delivered"
    },
    {
      id: 4,
      name: "Peter Horadnia",
      email: "horadnia@wxample.com",
      date: "1 Mar 2018",
      city: "Hanoverton",
      status: "Delivered"
    }
  ],
  table: [
    {
      id: 0,
      name: "Mark Otto",
      email: "ottoto@wxample.com",
      date: "11 May 2017",
      city: "Otsego",
      product: "EnKeep 250Gb",
      price: "$399.99",
      status: "Shipped",
    },
    {
      id: 1,
      name: "Jacob Thornton",
      email: "thornton@wxample.com",
      date: "4 Jun 2017",
      city: "Fivepointville",
      product: "Enkeep 500Gb",
      price: "$499.99",
      status: "Pending",
    },
    {
      id: 2,
      name: "Larry the Bird",
      email: "bird@wxample.com",
      date: "27 Aug 2017",
      city: "Leadville North",
      product: "Enkeep 1Tb",
      price: "$629.99",
      status: "Delivered",
    },
    {
      id: 3,
      name: "Joseph May",
      email: "josephmay@wxample.com",
      date: "19 Feb 2018",
      city: "Seaforth",
      product: "Enkeep 1Tb",
      price: "$629.99",
      status: "Delivered",
    },
    {
      id: 4,
      name: "Peter Horadnia",
      email: "horadnia@wxample.com",
      date: "1 Mar 2018",
      city: "Hanoverton",
      product: "Enkeep 1Tb",
      price: "$629.99",
      status: "Delivered",
    }
  ]
};
