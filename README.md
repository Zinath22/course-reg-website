# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- 1.Add at least 3 Project features -->
The three main features on this project are given below:
1.When click on the select button,the course name will be show in the next cart and multiple course name will not be added.

2.Total credit will be showed and if it is  more than twenty,it will show a toast.

3.Remaining credit will show subtracted from total credit,and if it is less than 0 then  show a Toast

<!-- Discuss how you managed the state in your assignment project. -->
I used useState Hook for store data and load data of allCourse, selectedCourse,remaining,totalCredit,totalPrice.

I used UseEffect to fetch allCourse data and convert JSON by response.Then i have set the data of second parameter(setAllCourse).

The selectedCourse state variable is updated with the selected course.
The remaining state variable is updated by subtracting the credit hours of the selected course from the total credit hours.
The totalCredit state variable is updated by adding the credit hours of the selected course to the total credit hours.
The selectedCourse state variable is then rendered to display the list of selected courses.
