package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	// Set the port to use from the environment variable or default to 8080
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Define the handler function for the root route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Received request: %s %s\n", r.Method, r.URL)
		fmt.Fprintf(w, "Welcome to the Go API!")
	})

	// Start the server and log any errors if they occur
	fmt.Printf("Server running on port %s\n", port)
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatalf("Error starting server: %s\n", err)
	}
}
