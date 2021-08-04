const Tasks = require('./Tasks');

describe('Gets test entries from database', () => {
    
    test('Get Entries from fixed tableName: ', async () => {
        await new Tasks().getTestEntries()
    });

    test('Get Entries from promted tableName: ', async () => {
        await new Tasks().getEntriesByName('tasksList1')
    });

    test('Add Entriy to promted tableName: ', async () => {
        await new Tasks().addEntry('tasksList1', 999, "new", "new", true)
    });

    test('Delete Entriy from promted tableName: ', async () => {
        await new Tasks().removeEntry('tasksList1', 999)
    });

    test('Update Entriy from promted tableName: ', async () => {
        await new Tasks().updateEntry('tasksList1', 1, newId=1, name="new", desc="new", isChecked=true)
    });
});