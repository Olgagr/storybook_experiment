import fs from "fs";
import path from "path";

export const addon = {
  name: "documentation-generator",

  // This function will run during build-time
  async onBuild({ api }) {
    const stories = await api.getStories();

    // Create a new JSON file
    const outputFilePath = path.join(__dirname, "../documentation.json");

    let indexJsonContent = fs.readFileSync(outputFilePath, "utf8");

    // Parse the existing index.json content
    const indexJson = JSON.parse(indexJsonContent);

    // Process each story
    for (const storyId in stories) {
      const story = stories[storyId];

      // Check if the story has documentation
      if (story.parameters?.docs) {
        const docs = story.parameters.docs;

        // Find the corresponding entry in the index.json
        let foundEntry = null;
        for (const id in indexJson.entries) {
          if (id === storyId) {
            foundEntry = indexJson.entries[id];
            break;
          }
        }

        if (foundEntry && !foundEntry.docs) {
          // Add docs to the existing entry
          foundEntry.docs = docs;

          // Update the index.json content
          indexJsonContent = JSON.stringify(indexJson, null, 2);

          // Write the updated content back to the file
          fs.writeFileSync(outputFilePath, indexJsonContent);

          console.log(`Added documentation for ${storyId}`);
        }
      }
    }
  },
};
