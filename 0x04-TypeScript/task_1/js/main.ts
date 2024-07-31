interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
