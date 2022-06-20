import React from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import CreateNoteInput from "./components/CreateNoteInput";
import SelectionInfo from "./components/SelectionInfo";
import { v4 as uuid } from "uuid";
import TopMenu from "./components/TopMenu";
import SideMenu from "./components/SideMenu";
import { authContext} from "./context/authContext";
import { useContext , useState} from "react";

function NotesApp() {
   const [notes, setNotes] = useState( [
      {
         id: "0",
         title: "Note",
         selected: false,
         color: "#ffffff",
         tags: ["information", "simple_tag"],
         text: "Notes is an application to keep your notes organized.",
      }
   ]);

   const [notesSelectedCount, setNotesSelectedCount] = useState(0);
   const [isSideMenuVisible, setSideMenuVisible] = useState(false);
   const [selectedTag, setSelectedTag] = useState("All Notes");
   const [tags, setTags] = useState([]);


   const get_tags = () => {
      let _tags = notes.map((note) => {
         note.tags.forEach((tag) => {
            return tag;
         });
      });
      return Array.from(new Set(_tags));
   }

   const handleNoteAdded = (note) => {
      if (note.text === "") return;

      note.id = uuid().slice(0, 8);
      if (note.tags[0] === "") {
         note.tags = [];
      }
      const new_tags = note.tags.map((tag) => {
         if (!tags.includes(tag)) {
            return tag;
         }
      });

      setNotes({ notes: [ note, ...notes] });
      setTags([...tags, ...new_tags]);
   };

   const handleNoteDeleted = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
   };

   const handleColorNoteChange = (id, color) => {
      const index = notes.findIndex((el) => el.id === id);
      const _notes = [...notes];
      _notes[index].color = color;
      setNotes(_notes);
   };

   const handleNoteSelection = (id) => {
      console.log(notes);
      const index = notes.findIndex((el) => el.id === id);
      const _notes = [...notes];
      let count = notesSelectedCount;
      if (!_notes[index].selected) {
         count += 1;
         _notes[index].selected = true;
      } else {
         count -= 1;
         _notes[index].selected = false;
      }
      setNotesSelectedCount(count);
      setNotes(_notes);
      setSideMenuVisible(false);
   };

   const handleCancelSelection = () => {
      setNotesSelectedCount(0);
      setNotes(notes.map((note) => {
         note.selected = false;
         return note;
      }));
   };

   const handleDeleteSeletedNotes = () => {
      setNotesSelectedCount(0);
      setNotes(notes.filter((item) => item.selected !== true));
   };

   const handleColorSelectedNotes = (color) => {
      setNotes(notes.map((item) => {
         if (item.selected) {
            item.color = color;
         }
         return item;
      }));
   }

   return (
      <div className="App">
         <p className="watermark">
            Developed by Andrés Gamboa Alfaro (2022)
         </p>
         <TopMenu
            onOptionsClick={() => setSideMenuVisible(!isSideMenuVisible)}
            tag={selectedTag}
         />
         <div className="hbox">
            <SideMenu
               active={isSideMenuVisible}
               tags={get_tags()}
               onTagSelected={(tag) => setSelectedTag(tag)}
            />
            <div className={`margin ${ isSideMenuVisible? "side-active" : ""}`}></div>
            <div className="app-container">
               {notesSelectedCount > 0 && (
                  <SelectionInfo
                     selectedCount={notesSelectedCount}
                     onSelectionCanceled={handleCancelSelection}
                     onDeleteSelectedNotes={handleDeleteSeletedNotes}
                     onColorSelectedNotes={handleColorSelectedNotes}
                  />
               )}
               <CreateNoteInput
                  onSubmit={handleNoteAdded}
                  tag={selectedTag}
               />
               <NotesList
                  notes={
                     selectedTag === "All Notes" ? notes : notes.filter((note) => {
                        return note.tags.includes(
                           selectedTag
                        );
                     })
                  }
                  onNoteColorSelected={handleColorNoteChange}
                  onNoteSelected={handleNoteSelection}
                  onNoteDeleted={handleNoteDeleted}
               />
            </div>
         </div>
      </div>
   );
}


export default NotesApp;
