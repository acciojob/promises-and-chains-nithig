//your JS code here. If required.
const form = document.getElementById('votingForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();

      if (!name || !age) {
        alert("Please enter valid details");
        return;
      }

      // Convert age to number
      const ageNum = Number(age);

      const checkEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ageNum > 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000);
      });

      checkEligibility
        .then(() => {
          alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
          alert(`Oh sorry ${name}. You aren't old enough.`);
        });
    });