const addBtn = document.querySelector("#btn");
const main = document.querySelector("#main");


(
    function(){
        const notes = localStorage.getItem("notes");
    }
)()

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    localStorage.setItem("notes", JSON.stringify(data));
};

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i class="save fa-solid fa-floppy-disk"></i>
            <i class="trash fa-solid fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click", 
        function () {
            note.remove();
            saveNotes();
        }
    );
    note.querySelector(".save").addEventListener(
        "click", 
        function () {
            saveNotes();
        }
    );

    note.querySelector("textarea").addEventListener(
        "focusout", 
        saveNotes
    );

    main.appendChild(note);
};


const loadNotes = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(note => addNote(note));
};

addBtn.addEventListener(
    "click", 
    function () {
        addNote();
    }
);

loadNotes();
