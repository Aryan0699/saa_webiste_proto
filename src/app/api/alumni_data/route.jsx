

import { NextResponse } from "next/server";

const ALUMNI = [
  // Existing entries
  {
    name: 'Akash Singh',
    grad_year: 2018,
    dept: 'CSE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Software Engineer @ Google'
  },
  {
    name: 'Meera Patel',
    grad_year: 2020,
    dept: 'ME',
    city: 'San Jose',
    country: 'USA',
    lat: 37.3382,
    lon: -121.8863,
    role: 'Robotics Engineer @ Tesla'
  },

  // 14 more from Bengaluru
  {
    name: 'Rahul Nair',
    grad_year: 2019,
    dept: 'ECE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Product Manager @ Flipkart'
  },
  {
    name: 'Sanya Rao',
    grad_year: 2021,
    dept: 'CSE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Software Engineer @ Microsoft'
  },
  {
    name: 'Karan Mehta',
    grad_year: 2022,
    dept: 'EE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'AI Researcher @ OpenAI'
  },
  {
    name: 'Divya Sharma',
    grad_year: 2020,
    dept: 'ME',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Design Engineer @ Infosys'
  },
  {
    name: 'Rohit Verma',
    grad_year: 2017,
    dept: 'CE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Civil Consultant @ L&T'
  },
  {
    name: 'Anjali Iyer',
    grad_year: 2023,
    dept: 'CSE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'SDE @ Razorpay'
  },
  {
    name: 'Nikhil Reddy',
    grad_year: 2019,
    dept: 'EE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Hardware Engineer @ Intel'
  },
  {
    name: 'Tanya Gupta',
    grad_year: 2021,
    dept: 'CSE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'ML Engineer @ Ola Electric'
  },
  {
    name: 'Vikram Joshi',
    grad_year: 2020,
    dept: 'CE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Project Manager @ Prestige'
  },
  {
    name: 'Sneha Kulkarni',
    grad_year: 2018,
    dept: 'ECE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Data Analyst @ Oracle'
  },
  {
    name: 'Manish Desai',
    grad_year: 2016,
    dept: 'ME',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Senior Engineer @ Bosch'
  },
  {
    name: 'Preeti Ramesh',
    grad_year: 2015,
    dept: 'EE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'System Architect @ Cisco'
  },
  {
    name: 'Harshita Jain',
    grad_year: 2022,
    dept: 'CSE',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Frontend Dev @ Swiggy'
  },

  // 10 from Mumbai
  {
    name: 'Ravi Kapoor',
    grad_year: 2021,
    dept: 'CSE',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'Backend Dev @ TCS'
  },
  {
    name: 'Neha Shah',
    grad_year: 2020,
    dept: 'EE',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'Network Engineer @ Reliance Jio'
  },
  {
    name: 'Aman Thakur',
    grad_year: 2019,
    dept: 'CSE',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'DevOps @ Paytm'
  },
  {
    name: 'Kavya Menon',
    grad_year: 2022,
    dept: 'ME',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'Automobile Designer @ Tata Motors'
  },
  {
    name: 'Vivek Anand',
    grad_year: 2018,
    dept: 'ECE',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'System Analyst @ Capgemini'
  },
  {
    name: 'Anusha Jain',
    grad_year: 2017,
    dept: 'CSE',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'Full Stack Dev @ L&T Infotech'
  },
  {
    name: 'Rishi Khanna',
    grad_year: 2016,
    dept: 'CE',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'Urban Planner @ MMRDA'
  },
  {
    name: 'Shalini Pandey',
    grad_year: 2020,
    dept: 'EE',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'Electrical Engineer @ Adani'
  },
  {
    name: 'Ishaan Roy',
    grad_year: 2023,
    dept: 'CSE',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'SDE @ CRED'
  },
  {
    name: 'Nandita Bose',
    grad_year: 2019,
    dept: 'ME',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'Engineer @ Godrej Aerospace'
  },

  // 10 from Gurgaon
  {
    name: 'Aditya Singh',
    grad_year: 2021,
    dept: 'CSE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'Software Engineer @ Zomato'
  },
  {
    name: 'Pooja Batra',
    grad_year: 2019,
    dept: 'EE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'Engineer @ Maruti Suzuki'
  },
  {
    name: 'Siddharth Malhotra',
    grad_year: 2022,
    dept: 'CSE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'Full Stack Dev @ MakeMyTrip'
  },
  {
    name: 'Alisha Rani',
    grad_year: 2020,
    dept: 'CE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'Construction Engineer @ DLF'
  },
  {
    name: 'Kunal Arora',
    grad_year: 2017,
    dept: 'CSE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'Tech Lead @ Snapdeal'
  },
  {
    name: 'Ritika Yadav',
    grad_year: 2021,
    dept: 'EE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'IoT Engineer @ Honeywell'
  },
  {
    name: 'Naman Agarwal',
    grad_year: 2023,
    dept: 'ME',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'R&D Engineer @ Hero MotoCorp'
  },
  {
    name: 'Shreya Bansal',
    grad_year: 2018,
    dept: 'ECE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'QA Engineer @ Samsung'
  },
  {
    name: 'Aarav Bhatt',
    grad_year: 2022,
    dept: 'CSE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'SDE @ UrbanClap'
  },
  {
    name: 'Meghna Chawla',
    grad_year: 2016,
    dept: 'CE',
    city: 'Gurgaon',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    role: 'Sr. Architect @ DLF'
  },

  // Others across India & world
  {
    name: 'Tarun Das',
    grad_year: 2020,
    dept: 'CSE',
    city: 'Hyderabad',
    country: 'India',
    lat: 17.3850,
    lon: 78.4867,
    role: 'Security Analyst @ Amazon'
  },
  {
    name: 'Aisha Khan',
    grad_year: 2018,
    dept: 'EE',
    city: 'Delhi',
    country: 'India',
    lat: 28.6139,
    lon: 77.2090,
    role: 'Embedded Systems Engineer @ DRDO'
  },
  {
    name: 'Daniel Mathew',
    grad_year: 2021,
    dept: 'CSE',
    city: 'Toronto',
    country: 'Canada',
    lat: 43.651070,
    lon: -79.347015,
    role: 'Cloud Engineer @ Shopify'
  },
  {
    name: 'Sofia Das',
    grad_year: 2019,
    dept: 'CSE',
    city: 'London',
    country: 'UK',
    lat: 51.5074,
    lon: -0.1278,
    role: 'Data Scientist @ DeepMind'
  },
  {
    name: 'Rohan Pillai',
    grad_year: 2017,
    dept: 'ME',
    city: 'Pune',
    country: 'India',
    lat: 18.5204,
    lon: 73.8567,
    role: 'Engineer @ Cummins'
  },
  {
    name: 'Rahul Mehta',
    grad_year: 2019,
    dept: 'ME',
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    role: 'Mechanical Engineer @ L&T'
  },
  {
    name: 'Ankita Sharma',
    grad_year: 2021,
    dept: 'CSE',
    city: 'Hyderabad',
    country: 'India',
    lat: 17.3850,
    lon: 78.4867,
    role: 'SDE @ Microsoft'
  },
  {
    name: 'Devansh Patel',
    grad_year: 2020,
    dept: 'EE',
    city: 'Pune',
    country: 'India',
    lat: 18.5204,
    lon: 73.8567,
    role: 'Hardware Design Engineer @ Intel'
  },
  {
    name: 'Isha Verma',
    grad_year: 2017,
    dept: 'CE',
    city: 'Chennai',
    country: 'India',
    lat: 13.0827,
    lon: 80.2707,
    role: 'Project Manager @ TCS'
  },
  {
    name: 'Arjun Nair',
    grad_year: 2018,
    dept: 'CSE',
    city: 'San Francisco',
    country: 'USA',
    lat: 37.7749,
    lon: -122.4194,
    role: 'Senior Software Engineer @ Meta'
  },
  {
    name: 'Megha Reddy',
    grad_year: 2020,
    dept: 'ECE',
    city: 'Toronto',
    country: 'Canada',
    lat: 43.651070,
    lon: -79.347015,
    role: 'Data Scientist @ Shopify'
  },
  {
    name: 'Karthik Subramanian',
    grad_year: 2019,
    dept: 'EE',
    city: 'Berlin',
    country: 'Germany',
    lat: 52.5200,
    lon: 13.4050,
    role: 'Systems Engineer @ Siemens'
  },
  {
    name: 'Aisha Khan',
    grad_year: 2021,
    dept: 'CSE',
    city: 'Singapore',
    country: 'Singapore',
    lat: 1.3521,
    lon: 103.8198,
    role: 'AI Researcher @ Grab'
  }
  , {
    name: 'Priya Deshmukh',
    grad_year: 2016,
    dept: 'CSE',
    city: 'New Delhi',
    country: 'India',
    lat: 28.6139,
    lon: 77.2090,
    role: 'Tech Lead @ Amazon'
  },
  {
    name: 'Neeraj Gupta',
    grad_year: 2019,
    dept: 'ME',
    city: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    role: 'Product Manager @ Ola Electric'
  },
  {
    name: 'Tanya Kapoor',
    grad_year: 2022,
    dept: 'EE',
    city: 'London',
    country: 'UK',
    lat: 51.5072,
    lon: -0.1276,
    role: 'Graduate Engineer @ ARM'
  },
  {
    name: 'Rohan Joshi',
    grad_year: 2018,
    dept: 'CSE',
    city: 'Sydney',
    country: 'Australia',
    lat: -33.8688,
    lon: 151.2093,
    role: 'Cloud Engineer @ Atlassian'
  },
  {
    name: 'Fatima Zahra',
    grad_year: 2020,
    dept: 'CE',
    city: 'Dubai',
    country: 'UAE',
    lat: 25.2048,
    lon: 55.2708,
    role: 'Structural Engineer @ WSP Global'
  }


];



export async function GET() {
  const details = ALUMNI.map(alumni => ({
    name: alumni.name,
    lat: alumni.lat,
    lng: alumni.lon,
    label: `${alumni.name} (${alumni.grad_year}) - ${alumni.role}`,
    dept: alumni.dept,
    city: alumni.city,
    country: alumni.country,
  }));
  console.log("Fetching Details")

  return NextResponse.json(details, { status: 200 });
}
