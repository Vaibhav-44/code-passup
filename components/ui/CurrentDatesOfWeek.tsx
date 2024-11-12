export function CurrentDatesOfWeek() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const offsetToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + offsetToMonday);
  
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(startOfWeek.getDate() + i);
      weekDates.push(currentDate.getDate());
    }
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const currentMonth = {name: monthNames[today.getMonth()], value:  today.getMonth()};
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();
  
    return {
      weekDates,
      currentMonth,
      currentYear,
      currentDate,
    };
  }
  

  const CalenderData = [
    {
      time: "10:00 - 10:30",
      title: "Works review",
      subtitle: "Figma fundamentals: first step into UI/UX Design",
    },
    {
      time: "11:00 - 12:30",
      title: "Notes and messages",
      subtitle: "Creative collaboration: teamwork in Figma",
      live: true,
    },
    {
      time: "15:00 - 16:45",
      title: "Teamwork",
      subtitle: "Figma fundamentals: first step into UI/UX Design",
    },
    { time: "17:00 - 17:30", title: "Tutor", subtitle: "" },
  ];