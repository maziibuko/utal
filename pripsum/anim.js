function createEventSourceResponseHandler(response) {
  if (response.status === 200) {
    // Event source created successfully
    console.log('Event source created successfully');
  } else {
    // Event source creation failed
    console.error('Error creating event source: ' + response.statusText);
  }
}
