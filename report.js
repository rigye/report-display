import { i } from "react-router/dist/development/route-data-DuV3tXo2";
import { getreport } from "../services/report";
import { getreport } from "../services/report";
export const reportStore = {
    state: {
      transactionId: null,
      date: null,
    },
    actions: {
      async getreport() {
        try {
          const response = await getreport();
          console.log(response);
          this.transactionId = response.data;
        } catch (error) {
          console.error("Error fetching report:", error);
        }
      },
      settransactionId(transactionId) {
        this.transactionId = transactionId;
      },
      setdate(date) {
        this.date = date;
      },
    },
  };
