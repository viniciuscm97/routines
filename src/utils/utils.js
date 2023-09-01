
class Utils {
    times = () => {
        const second = 1000;
        const minute = 60 * second;
        const hour = 60 * minute;

        return { second, minute, hour };
    }
    
}

export default new Utils();
