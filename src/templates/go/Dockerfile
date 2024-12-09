# Use official Golang image as a base
FROM golang:1.17-alpine

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./

# Download dependencies (use go mod tidy if necessary)
RUN go mod tidy

# Copy the entire project
COPY . .

# Build the Go app
RUN go build -o main .

# Expose port 8080 to be accessed outside the container
EXPOSE 8080

# Run the executable
CMD ["./main"]
