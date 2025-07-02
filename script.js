const rooms = [
    { id: 'room1', name: 'Room 1', price: 20, slots: ['10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'] },
    { id: 'room2', name: 'Room 2', price: 25, slots: ['10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'] },
    { id: 'room3', name: 'Room 3', price: 30, slots: ['10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'] },
    { id: 'room4', name: 'Room 4', price: 35, slots: ['10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'] },
    { id: 'room5', name: 'Room 5', price: 40, slots: ['10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'] }
];

function renderRooms() {
    rooms.forEach(room => {
        const roomElement = document.getElementById(room.id + '-slots');
        room.slots.forEach(slot => {
            const slotElement = document.createElement('div');
            slotElement.classList.add('time-slot');
            slotElement.textContent = slot;
            slotElement.addEventListener('click', () => toggleBooking(room.id, slot, slotElement));
            roomElement.appendChild(slotElement);
        });

        // Toggle button
        const toggleButton = document.getElementById(room.id).querySelector('.toggle-slots');
        toggleButton.addEventListener('click', () => toggleSlotDisplay(room.id));
    });
}

function toggleSlotDisplay(roomId) {
    const roomElement = document.getElementById(roomId + '-slots');
    const isVisible = roomElement.style.display === 'none' ? false : true;
    roomElement.style.display = isVisible ? 'none' : 'block';
}

function toggleBooking(roomId, slot, slotElement) {
    if (slotElement.classList.contains('booked')) {
        const cancel = confirm(`Do you want to cancel your booking for ${slot} in ${roomId}?`);
        if (cancel) {
            slotElement.classList.remove('booked');
            slotElement.textContent = slot;
        }
    } else {
        const user = prompt(`Who is booking this slot (${slot}) in ${roomId}?`);
        if (user) {
            const color = getColor(user);
            slotElement.classList.add('booked');
            slotElement.style.backgroundColor = color;
            slotElement.textContent = `${slot} (Booked by ${user})`;
        }
    }
}

function getColor(user) {
    const colors = {
        "John": "#e74c3c",
        "Alice": "#f39c12",
        "Bob": "#3498db",
        "Emma": "#9b59b6",
        "Mike": "#2ecc71"
    };
    return colors[user] || "#16a085";  // default color
}

document.addEventListener('DOMContentLoaded', renderRooms);
