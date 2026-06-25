class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let courses = {}
        let validating = new Set();

        for (let i = 0; i < numCourses; i++) {
            courses[i] = [];
        }

        for (let entry of prerequisites) {
            let [course, prereq] = entry;

            if (course in courses) {
                courses[course].push(prereq);
                continue;    
            }
        }

        for (let course of Object.keys(courses)) {
            if (!this.dfs(course, courses, validating)) {
                return false;
            }
        }

        return true;
    }

    dfs(course, courses, validating) {
        if (validating.has(course)) {
            return false;
        }

        if (courses[course].length === 0) {
            return true;
        }

        validating.add(course);
        for (let prereq of courses[course]) {
            if (!this.dfs(prereq, courses, validating)) {
                return false;
            }
        }

        validating.delete(course)
        courses[course] = [];

        return true;
    }
}
