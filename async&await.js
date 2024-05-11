// Function to simulate asynchronous enrollment process
const enrollStudent = (studentName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // Random success/failure
            if (isSuccess) {
                resolve(`Enrollment successful for ${studentName}`);
            } else {
                reject(`Enrollment failed for ${studentName}. Please try again.`);
            }
        }, 2000); 
    });
};

// Async function using await
const processEnrollment = async () => {
    const studentName = "John";

    try {
        console.log("Enrollment process started...");
        const result = await enrollStudent(studentName);
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Enrollment process completed.");
    }
};

// Call the async function
processEnrollment();
