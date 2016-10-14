export default {
    id: 'hodge',
    children: [
        {
            id: 'plan out hodge stage 0 (minimal formatting & interface for picard)',
            done: true
        },
        {
            id: 'sprint: csv support & formatting interface',
            children: [
                {
                    id: 'serverside',
                    children: [

                        {
                            id: 'file -> fields',
                            poms: 1,
                            done: true
                        },
                        {
                            id: 'file, fieldsSpec -> picard input',
                            children: [
                                {
                                    id: 'basic formatting',
                                    poms: 1,
                                    done: true
                                },
,                                       {
                                    id: 'fields type casting',
                                    poms: 1,
                                    done: true,
                                },

                                {
                                    id: 'cleanup: null field filtering etc',
                                    poms: 1,
                                    done: true
                                },

                                {
                                    id: 'make this shit faster',
                                    poms: 1,
                                    done: true
                                },

                                {
                                    id: 'numerical fields normalization',
                                    poms: 1,
                                    done: true
                                },

                                {
                                    id: 'Generate tokenize index, send int array to picard',
                                    poms: 2,
                                    done: true
                                },
                                {
                                    id: 'Force a index on non-number output columns',
                                    poms: 2
                                }

                            ]
                        },
                        {
                            id: 'data formatter server',
                            children: [
                                {
                                    id: 'set up flask application',
                                    pom: 1,
                                    done: true
                                },
                                {
                                    id: 'download from s3',
                                    pom: 1,
                                    done: true
                                },
                                {
                                    id: 'fetch fields endpoint',
                                    pom: 1,
                                    done: true,
                                },
                                {
                                    id: 'fetch hadamard output endpoint',
                                    pom: 1,
                                    done: true
                                },
                                {
                                    id: 'optimization: cache temp file uploads',
                                    pom: 1,
                                    done: true
                                },
                                {
                                    id: 'upload result to s3',
                                    pom: 1,
                                    done: true
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'client',
                    children: [
                        {
                            id: 'route & skeleton in noether',
                            poms: 2,
                            done: true
                        },
                        {
                            id: 'cleanup upload endpoint and callbacks',
                            poms: 2,
                            done: true
                        },
                        {
                            id: 'progress bar',
                            poms: 1,
                            done: true
                        },
                        {
                            id: 'display fields result',
                            poms: 1,
                            done: true
                        },
                        {
                            id: 'fields selection interface',
                            poms: 3,
                            done: true
                        },
                        {
                            id: 'send correct formatting request',
                            poms: 1,
                            done: true
                        },
                        {
                            id: 'debug sending formatted request to picard endpoint',
                            poms: 1
                        },
                        {
                            id: 'upload: make cancel key work and disable upload when uploading',
                            poms: 2
                        }
                    ]
                },

                {
                    id: 'design & style tweaks',
                    poms: 4,
                    done: true
                }
            ]
        },
        {
            id: 'mongo models for datasets',
            children: [
                {
                    id: 'noether serverside support',
                    children: [
                        {
                            id: 'set up table and structure',
                            poms: 1
                        },
                        {
                            id: 'write to it with noether (serverside)',
                            poms: 1
                        },
                    ]
                },
                {
                    id: 'hodge support',
                    children: [
                        {
                            id: 'send metadata in hodge requests',
                            poms: 1
                        },
                        {
                            id: 'hodge: write decode dictionary to mongo',
                            poms: 2
                        },
                    ]
                },

                {
                    id: 'client side changes',
                    children: [
                        {
                            id: 'noether: attach metadata to datasets display',
                            poms :2
                        },
                        {
                            id: 'noether client: display model metadata',
                            poms: 1
                        },
                        {
                            id: 'noether client: name dataset',
                            poms: 1
                        },
                        {
                            id: 'noether: replace "search view" and rethink UI there',
                            poms: 1
                        },
                        {
                            id: 'noether: payment prompt logic for new experiement panel',
                            poms: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 'auto-hadamard-deployment trigger',
            poms: 20
        }
    ]
}